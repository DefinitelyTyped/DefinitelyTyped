/**
 * Documentation
 *
 * @see {@link https://github.com/paypal/Checkout-NodeJS-SDK/blob/develop/lib/core/refresh_token_request.js}
 */

import { AccessTokenRequestHeaders } from './access_token_request';
import { PayPalEnvironment } from './paypal_environment';

export interface RefreshTokenRequestBody {
    grant_type: 'authorization_code';
    code: string;
}

export class RefreshTokenRequest {
    readonly body: RefreshTokenRequestBody;
    readonly headers: AccessTokenRequestHeaders;
    readonly path: string;
    readonly verb: 'POST';

    /**
     * @param environment - The environment for this request (sandbox or live)
     * @param code - The authorization code provided at the end of the user consent OAuth flow.
     */
    constructor(environment: PayPalEnvironment, code: string);
}
