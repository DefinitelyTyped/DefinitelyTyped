import { Payment, OmiseFlow, Currency, HttpStatusCode, OmiseResponseFailure } from './utils';
export default interface Omise {
    /**
     * Use your public key to authenticate.
     *
     * @see https://www.omise.co/omise-js#setpublickey
     */
    setPublicKey: OmiseSetPublicKey;
    /**
     * Create the one-time-use token object from Omise server that you can use to create a charge or attach to a customer object as a card.
     *
     * @see https://www.omise.co/omise-js#createtoken
     */
    createToken: OmiseCreateToken;
    /**
     * Create the one-time-use source object from Omise server that you can use to create a charge.
     *
     * @see https://www.omise.co/sources-api for available source types and required parameters.
     *
     * @see https://www.omise.co/omise-js#createsource
     */
    createSource: OmiseCreateSource;
}
export declare type OmiseSetPublicKey = (key: string) => void;
export declare type OmiseCreateToken = (type: string, tokenParameters: OmiseTokenParameters, callback: OmiseCreateTokenCallback) => void;
export interface OmiseTokenParameters {
    city?: string;
    country?: string;
    expiration_month: number;
    expiration_year: number;
    name: string | string;
    number: number | string;
    phone_number?: number;
    postal_code?: number;
    security_code?: number;
    state?: string;
    street1?: string;
    street2?: string;
}
export interface Card {
    bank: string;
    brand: string;
    city: string | null;
    country: string;
    deleted: boolean;
    expiration_month: number;
    expiration_year: number;
    financing: string;
    fingerprint: string;
    first_digits: number | number | null;
    id: string;
    last_digits: string | number | number;
    livemode: boolean;
    location: string | null;
    name: string | string;
    number: number | string | null;
    object: string;
    phone_number: number;
    postal_code: number;
    security_code: number;
    state: string | null;
    street1: string | null;
    street2: string | null;
}
export declare type OmiseCreateTokenCallback = (statusCode: HttpStatusCode, response: OmiseCreateTokenResponse) => void;
export declare type OmiseCreateTokenResponse = OmiseCreateResponseSuccessful | OmiseResponseFailure;
export interface OmiseCreateResponseSuccessful {
    card: Card;
    charge_status: string;
    created_at: string;
    id: string;
    livemode: boolean;
    location: string;
    object: string;
    used: boolean;
}
export declare type OmiseCreateSource = (type: Payment, sourceParameters: OmiseCreateSourceParameters, callback: OmiseCreateSourceCallback) => void;
export interface OmiseCreateSourceParameters {
    amount: number;
    barcode?: string;
    currency: Currency;
    email?: string;
    installment_term?: number;
    name?: string;
    phone_number?: string | number;
    store_id?: string | number;
    store_name?: string;
    terminal_id?: string | number;
    type: Payment;
    zero_interest_installments?: boolean;
}
export declare type OmiseCreateSourceCallback = OmiseCreateSourceCallbackSuccessful | OmiseResponseFailure;
export interface OmiseCreateSourceCallbackSuccessful {
    object: string;
    id: string;
    livemode: boolean;
    location: string;
    amount: string;
    bar_code: string;
    charge_status: string;
    created_at: string;
    currency: Currency;
    email: string;
    flow: OmiseFlow;
    installment_term: number;
    mobile_number: string;
    name: string;
    phone_number: string;
    references: string;
    scannable_code: string;
    store_id: string;
    store_name: string;
    terminal_id: string;
    type: Payment;
    zero_interest_installments: boolean;
}
