/**
 * Documentation
 *
 * @see {@link https://github.com/paypal/Checkout-NodeJS-SDK/blob/develop/lib/core/paypal_environment.js}
 */

import paypalhttp = require('@paypal/paypalhttp');

export class PayPalEnvironment extends paypalhttp.Environment {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly webUrl: string;

    /**
     * @param clientId - The client id for this environment
     * @param clientSecret - The client secret
     * @param baseUrl - The base url to execute requests
     * @param webUrl - The web url to authorize user's consent
     */
    constructor(clientId: string, clientSecret: string, baseUrl: string, webUrl: string);

    /**
     * Authorization header string for basic authentication with the current client id and secret
     */
    authorizationString(): string;
}

export class SandboxEnvironment extends PayPalEnvironment {
    constructor(clientId: string, clientSecret: string);
}

export class LiveEnvironment extends PayPalEnvironment {
    constructor(clientId: string, clientSecret: string);
}
