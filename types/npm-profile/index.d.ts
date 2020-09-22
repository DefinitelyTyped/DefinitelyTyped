// Type definitions for npm-profile 5.0
// Project: https://github.com/npm/npm-profile#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5
import fetch = require('npm-registry-fetch');

/**
 * Fetch profile information for the authenticated user.
 * @async
 */
export function get(options?: Options): Promise<ProfileData>;

/**
 * Update profile information for the authenticated user.
 * @async
 */
export function set(updateOptions: UpdateProfileData, options?: Options): Promise<ProfileData>;

/**
 * Fetch a list of all of the authentication tokens the authenticated user has.
 * @async
 */
export function listTokens(options?: Options): Promise<Token[]>;

/**
 * Remove a specific authentication token.
 * @async
 */
export function removeToken(tokenOrKey: string, options?: Options): Promise<void>;

/**
 * Create a new authentication token, possibly with restrictions.
 * @async
 */
export function createToken(
    password: string,
    readonly: boolean,
    cidr_whitelist: string[],
    options?: Options,
): Promise<Token>;

export type Options = fetch.Options & ProfileFetchOptions;

export interface ProfileFetchOptions {
    /** passed through to prompter */
    creds?: ProfileCredentials;
    /**
     * the hostname of the current machine, to show the user during the WebAuth flow.
     * @default os.hostname()
     */
    hostname?: string;
}

export interface ProfileCredentials {
    /**
     * default value for username
     */
    username: string;
    /**
     * default value for email
     */
    email: string;
}

export interface ProfileData {
    /**
     * two-factor authentication status
     */
    tfa: TFAStatus;
    name: string;
    email: string;
    email_verified: boolean;
    created: Date | string;
    updated: Date | string;
    cidr_whitelist: null | string[];
    fullname?: string;
    homepage?: string;
    freenode?: string;
    twitter?: string;
    github?: string;
}

export type UpdateProfileData = Partial<Omit<ProfileData, 'tfa' | 'created' | 'updated' | 'email_verified'>> &
    UpdateOptions;

export interface UpdateOptions {
    /**
     * This is used to change your password and is not visible (for obvious reasons) through the get() API.
     * The value should be an object with old and new properties, where the former has the user's current password and the latter has the desired new password.
     */
    password?: PasswordUpdate;
    tfa?: TFAStatusUpdate;
}

export interface PasswordUpdate {
    old: string;
    new: string;
}

export type TFAStatus =
    | null
    | false
    | {
          pending: boolean;
          [key: string]: any;
      }
    | [string, string]
    | string;

export interface TFAStatusUpdate {
    password: string;
    mode: 'disable' | 'auth-only' | 'auth-and-writes';
}

export interface FetchProfileError extends Error {
    code: string;
    method: string;
    statucCode: number;
    headers: {
        [key: string]: any;
    };
    uri: string;
    body: Uint8Array;
    pkgid?: string;
}

export interface Token {
    /**
     * A sha512 that can be used to remove this token.
     */
    key: string;
    /**
     * The first six characters of the token UUID. This should be used by the user to identify which token this is.
     */
    token: string | null;
    /**
     * The date and time the token was created
     */
    created: Date | string;
    /**
     * The date and time the token was updated
     */
    updated: Date | string;
    /**
     * If true, this token can only be used to download private modules. Critically, it CAN NOT be used to publish.
     */
    readonly: boolean;
    /**
     * An array of CIDR ranges that this token is allowed to be used from.
     */
    cidr_whitelist: string[];
}

export type LogLevel = 'error' | 'warn' | 'notice' | 'http' | 'timing' | 'info' | 'verbose' | 'silly';

declare global {
    namespace NodeJS {
        interface Process {
            emit(event: 'log', logLevel: LogLevel, ...any: string[]): boolean;
            on(event: 'log ', listener: (logLevel: LogLevel) => void): this;
        }
    }
}
