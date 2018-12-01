// Type definitions for hibp 7.2
// Project: https://github.com/wkovacs64/hibp
// Definitions by: Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

export interface BreachOptions {
    domain?: string;
    truncate?: boolean;
}

export interface Breach {
    Name: string;
    Title: string;
    Domain: string;
    BreachDate: string;
    AddedDate: string;
    ModifiedDate: string;
    PwnCount: number;
    Description: string;
    LogoPath: string;
    DataClasses: string[];
    IsVerified: boolean;
    IsFabricated: boolean;
    IsSensitive: boolean;
    IsRetired: boolean;
    IsSpamList: boolean;
}

export interface Paste {
    Id: string;
    Source: string;
    Title: string;
    Date: string;
    EmailCount: number;
}

export interface Range {
    suffix: string;
    count: number;
}

/**
 * Fetches data for a specific breach event.
 */
export function breach(breachName: string): Promise<Breach>;

/**
 * Fetches breach data for a specific account.
 */
export function breachedAccount(account: string, options?: BreachOptions): Promise<Breach[]>;

/**
 * Fetches all breach events in the system.
 */
export function breaches(options?: { domain?: string }): Promise<Breach[]>;

/**
 * Fetches all data classes in the system.
 */
export function dataClasses(): Promise<string[]>;

/**
 * Fetches paste data for a specific email address.
 */
export function pasteAccount(email: string): Promise<Paste[]>;

/**
 * Fetches the number of times the the given password has been exposed in a breach (0 indicating no exposure).
 * The password is given in plain text, but only the first 5 characters of its SHA-1 hash will be submitted to the API.
 */
export function pwnedPassword(password: string): Promise<number>;

/**
 * Fetches the SHA-1 hash suffixes for the given 5-character SHA-1 hash prefix.
 *
 * When a password hash with the same first 5 characters is found in the Pwned Passwords repository,
 * the API will respond with an HTTP 200 and include the suffix of every hash beginning with the specified prefix,
 * followed by a count of how many times it appears in the data set.
 *
 * This function parses the response and returns a more structured format.
 */
export function pwnedPasswordRange(prefix: string): Promise<Range[]>;

/**
 * Fetches all breaches and all pastes associated with the provided account (email address or username).
 *
 * Note that the remote API does not support querying pastes by username (only email addresses),
 * so in the event the provided account is not a valid email address,
 * only breach data is queried and the "pastes" field of the resulting object will always be null.
 *
 * This is exactly how searching via the current web interface behaves, which this convenience method is designed to mimic.
 *
 */
export function search(account: string, options?: BreachOptions): Promise<{ breaches?: Breach[], pastes?: Paste[] }>;
