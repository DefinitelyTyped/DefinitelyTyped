/**
 * Documentation
 *
 * @see {@link https://github.com/paypal/Checkout-NodeJS-SDK/blob/develop/lib/core/access_token.js}
 */

export interface AccessTokenOptions {
    /**
     * The access token
     */
    access_token: string;

    /**
     * The token type
     */
    expires_in: number;

    /**
     * The duration of the token in milliseconds
     */
    token_type: string;

    /**
     * The refresh token if any to refresh the current token
     */
    refresh_token: string;
}

export class AccessToken {
    constructor(options: AccessTokenOptions);

    /**
     * Get the expiration status of the token
     */
    isExpired(): boolean;

    /**
     * Get the value of an Authorization header with the current access token
     */
    authorizationString(): string;
}
