/**
 * Documentation
 *
 * @see {@link https://github.com/paypal/Checkout-NodeJS-SDK/blob/develop/lib/core/access_token_request.js}
 */

import { PayPalEnvironment } from "./paypal_environment";

export interface AccessTokenRequestHeaders {
    "Content-Type": string;
    Authorization: string;
}

export class AccessTokenRequest {
    readonly path: string;
    readonly body: string;
    readonly verb: string;
    readonly headers: AccessTokenRequestHeaders;

    constructor(environment: PayPalEnvironment, refreshToken?: string);
}
