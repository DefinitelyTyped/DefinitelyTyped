/**
 * Documentation
 *
 * @see {@link https://github.com/paypal/Checkout-NodeJS-SDK/blob/develop/lib/core/paypal_http_client.js}
 */

import paypalhttp = require("@paypal/paypalhttp");
import { PayPalEnvironment } from "./paypal_environment";

declare class PayPalHttpClient extends paypalhttp.HttpClient {
    readonly refreshToken: string;

    /**
     * @param environment - The environment for this client
     * @param refreshToken - The refreshToken to be used to generate the access Token.
     */
    constructor(environment: PayPalEnvironment, refreshToken?: string);

    fetchAccessToken(): string;

    execute(req: any): Promise<paypalhttp.HttpResponse<any>>;
}

export { PayPalHttpClient };
