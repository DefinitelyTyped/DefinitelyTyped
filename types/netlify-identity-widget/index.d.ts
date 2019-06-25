// Type definitions for netlify-identity-widget 1.4
// Project: https://github.com/netlify/netlify-identity-widget, https://identity.netlify.com
// Definitions by: Naveen Kumar Sangi <https://github.com/nkprince007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface InitOptions {
    // The container to attach to. e.g.: '#some-query-selector'
    container?: string;

    // Absolute url to endpoint. ONLY USE IN SPECIAL CASES!
    // e.g. https://www.example.com/.netlify/functions/identity
    // Generally avoid setting the APIUrl. You should only set this when
    // your app is served from a domain that differs from where the
    // identity endpoint is served.This is common for Cordova or Electron
    // apps where you host from localhost or a file.
    APIUrl?: string;
}

export interface Token {
    access_token: string;
    expires_at: string | number;
    expires_in: string | number;
    refresh_token: string;
    token_type: string;
}

export interface User {
    api: {
        _sameOrigin?: boolean;
        apiURL: string;
        defaultHeaders: {
            [header: string]: string | string[] | undefined;
        };
    };
    app_metadata: {
        provider: string;
    };
    aud: string;
    audience?: any;
    confirmed_at: string;
    created_at: string;
    updated_at: string;
    email: string;
    id: string;
    role: string;
    token?: Token;
    url: string;
    user_metadata: {
        avatar_url: string;
        full_name: string;
    };
}

/**
 * Initialises the netlify identity widget.
 */
export function init(opts?: InitOptions): void;

/**
 * Opens the netlify login modal to the corresponding tab.
 */
export function open(tabName?: "signup" | "login"): void;

/**
 * Closes the netlify login modal.
 */
export function close(): void;

/**
 * Retrieves the current logged in user information.
 */
export function currentUser(): User | null;

/**
 * Registers callbacks to corresponding events on the widget.
 */
export function on(event: 'init', cb: (user: User | null) => void): void;
export function on(event: 'login', cb: (user: User) => void): void;
export function on(event: 'logout' | 'open' | 'close', cb: () => void): void;
export function on(event: 'error', cb: (err: Error) => void): void;

/**
 * Logs out the current user. Returns a Promise<void> when a user is
 * logged in, else returns undefined.
 */
export function logout(): Promise<void> | undefined;
