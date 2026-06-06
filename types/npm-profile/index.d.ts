import fetch = require("npm-registry-fetch");

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

/**
 * Creates a new user on the server along with a fresh bearer token for future authentication as this user.
 * This is what you see as an authToken in an .npmrc.
 * @async
 */
export function adduser(
    opener: (url: string) => Promise<void>,
    prompter: (creds: ProfileAuthCredentials) => Promise<ProfileAuthCredentials>,
    opts?: Options,
): Promise<ProfileAuthToken>;

/**
 * Tries to login using new web based login, if that fails it falls back to using the legacy CouchDB APIs.
 * @async
 */
export function login(
    opener: (url: string) => Promise<void>,
    prompter: (creds: ProfileAuthCredentials) => Promise<ProfileAuthCredentials>,
    opts?: Options,
): Promise<ProfileAuthToken>;

/**
 * Tries to login using new web based login, if that fails it falls back to using the legacy CouchDB APIs.
 * @async
 */
export function loginWeb(opener: (url: string) => Promise<void>, opts?: Options): Promise<ProfileAuthToken>;

/**
 * Tries to create a user new web based login,
 * if that fails it falls back to using the legacy CouchDB APIs.
 * @async
 */
export function adduserWeb(opener: (url: string) => Promise<void>, opts?: Options): Promise<ProfileAuthToken>;

/**
 * Creates a new user on the server along with a fresh bearer token for future authentication as this user.
 * This is what you see as an authToken in an .npmrc.
 * @async
 */
export function adduserCouch(
    username: string,
    email: string,
    password: string,
    opts?: Options,
): Promise<ProfileAuthToken>;

/**
 * Logs you into an existing user. Does not create the user if they do not already exist.
 * Logging in means generating a new bearer token for use in future authentication.
 * This is what you use as an authToken in an .npmrc.
 * @async
 */
export function loginCouch(
    username: string,
    email: string,
    password: string,
    opts?: Options,
): Promise<ProfileAuthToken>;

export type Options = fetch.Options & ProfileFetchOptions;

export interface ProfileFetchOptions {
    /** passed through to prompter */
    creds?: ProfileCredentials | undefined;
    /**
     * the hostname of the current machine, to show the user during the WebAuth flow.
     * @default os.hostname()
     */
    hostname?: string | undefined;
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

export interface ProfileAuthCredentials extends ProfileCredentials {
    /**
     * default value for password
     */
    password: string;
}

export interface ProfileAuthToken {
    /**
     * String, to be used to authenticate further API calls.
     */
    token: string;
    /**
     * String, the username the user authenticated as.
     */
    username: string;
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
    fullname?: string | undefined;
    homepage?: string | undefined;
    freenode?: string | undefined;
    twitter?: string | undefined;
    github?: string | undefined;
}

export type UpdateProfileData =
    & Partial<Omit<ProfileData, "tfa" | "created" | "updated" | "email_verified">>
    & UpdateOptions;

export interface UpdateOptions {
    /**
     * This is used to change your password and is not visible (for obvious reasons) through the get() API.
     * The value should be an object with old and new properties, where the former has the user's current password and the latter has the desired new password.
     */
    password?: PasswordUpdate | undefined;
    tfa?: TFAStatusUpdate | undefined;
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
    mode: "disable" | "auth-only" | "auth-and-writes";
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
    pkgid?: string | undefined;
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

export type LogLevel = "error" | "warn" | "notice" | "http" | "timing" | "info" | "verbose" | "silly";

declare global {
    namespace NodeJS {
        interface Process {
            emit(event: "log", logLevel: LogLevel, ...any: string[]): boolean;
            on(event: "log ", listener: (logLevel: LogLevel) => void): this;
        }
    }
}
