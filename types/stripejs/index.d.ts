// Type definitions for stripe.js 3.0
// Project: https://stripe.com/
// Definitions by: Robin van Tienhoven <https://github.com/RobinvanTienhoven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { StripeElement, ElementCreatorOptions, ElementFactory } from './element';
import { StripePaymentOptions, StripePaymentRequest } from './payment';
import { BankTokenData, PiiTokenData, TokenData, IBANTokenData, TokenResult } from './token';
import { SourceData, SourceResult } from './source';

export interface StripeJS {
    /**
     * The currently used key
     */
    _apiKey: string;

    /**
     * The mode in which the requests are currently done
     * @example 'test'
     */
    _keyMode: string;

    /**
     * Initialization function for StripeJS
     * @see https://stripe.com/docs/stripe-js/reference#including-stripejs
     *
     * @param key - The public key of the user
     * @param [options] - Any options to configure StripeJS
     *
     * @return StripeJS instance
     */
    (key: string, options?: StripeConfigOptions): StripeJS;

    /**
     * Create an instance of elements which can be used to manage a group of StripeJS elements
     * @see https://stripe.com/docs/stripe-js/reference#stripe-elements
     *
     * @param [options] - Configuration options for the elements object
     *
     * @return an instance of `Elements` to manage a group of elements
     */
    elements(options?: ElementCreatorOptions): ElementFactory;

    /**
     * Creates a new payment request based on the given options
     * @see https://stripe.com/docs/stripe-js/reference#stripe-payment-request
     *
     * @param options - Options that should be used to configure the payment request
     */
    paymentRequest(options: StripePaymentOptions): StripePaymentRequest;

    /**
     * to convert information collected by Elements into a single-use token that you safely pass to your server
     * to use in an API call
     * @see https://stripe.com/docs/stripe-js/reference#stripe-create-token
     *
     * @param element - The element from which the data should be extracted
     * @param [data] - an object containing additional payment information you might have collected
     *
     * @return an object containing the generated token or an error
     */
    createToken(element: StripeElement, data?: TokenData | IBANTokenData): Promise<TokenResult>;
    createToken(type: 'bank_account', data: BankTokenData): Promise<TokenResult>;
    createToken(type: 'pii', data: PiiTokenData): Promise<TokenResult>;

    /**
     *  convert payment information collected by Elements into a Source object that you safely pass
     *  to your server to use in an API call
     *  @see https://stripe.com/docs/stripe-js/reference#stripe-create-source
     *
     * @param element - The element from which information should be extracted
     * @param data - An object containing the type of Source you want to create and any additional payment source information
     * NOTE: You cannot pass raw card information without an `Element`!
     *
     * @return an object containing the generated Source or an error
     */
    createSource(element: StripeElement, data: SourceData): Promise<SourceResult>;
    createSource(data: SourceData): Promise<SourceResult>;

    /**
     * Retrieve a Source using its unique ID and client secret
     * NOTE: The parameters are always available in any source object fetched with StripeJS
     *
     * @param id - Unique identifier of the source
     * @param client_secret - A secret available to the web client that created the Source
     *
     * @return an object containing the generated Source or an error
     */
    retrieveSource({id, client_secret}: { id: string, client_secret: string }): Promise<SourceResult>;
}

export interface StripeConfigOptions {
    stripeAccount: string;
}

/**
 * @see https://stripe.com/docs/api#errors
 */
export interface StripeError {
    /**
     * The type of error that has occurred
     */
    type: errorType;

    /**
     * For card errors, the ID of the failed charge
     */
    charge?: string;

    /**
     * For some errors that could be handled programmatically,
     * a short string indicating the error code reported
     */
    code?: string;

    /**
     * For card errors resulting from a card issuer decline,
     * a short string indicating the card issuer’s reason for the decline if they provide one
     */
    decline_code?: string;

    /**
     * A URL to more information about the error code reported
     */
    doc_url?: string;

    /**
     * A human-readable message providing more details about the error.
     * NOTE: For card errors, these messages can be shown to your users
     */
    message?: string;

    /**
     * If the error is parameter-specific, the parameter related to the error
     */
    param?: string;
}

export type errorType =
    'api_connection_error' |
    'api_error' |
    'authentication_error' |
    'card_error' |
    'idempotency_error' |
    'invalid_request_error' |
    'rate_limit_error';
