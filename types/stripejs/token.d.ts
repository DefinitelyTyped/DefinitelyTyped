import { StripeError } from "./index";
import { BankAccount, Card } from "./customer";

/**
 * @see https://stripe.com/docs/api#token_object
 */
export interface Token {
    /**
     * The unique identifier for the token
     */
    id: string;

    object: 'token';

    /**
     * Hash describing the bank account
     */
    bank_account?: BankAccount;

    /**
     * Hash describing the card used to make the charge
     */
    card?: Card;

    /**
     * IP address of the client that generated the token
     */
    client_ip: string;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch
     */
    created: string;

    /**
     * LIVE MODE = `true`
     * TEST MODE = `false`
     */
    livemode: boolean;

    /**
     * Type of the token
     */
    type: 'account' | 'bank_account' | 'card' | 'pii';

    /**
     * Whether this token has already been used (tokens can be used only once)
     */
    used: boolean;
}

// --- DATA TO CREATE A TOKEN --- //
export interface TokenData {
    /**
     * The Cardholder name
     */
    name: string;

    /**
     * The amount paid, not a decimal. In USD this is in cents.
     */
    amount?: number;

    /**
     * Fields for billing address information.
     */
    address_line1: string;
    address_line2?: string;
    address_city: string;
    address_state: string;
    address_zip: string;

    /**
     * A two character country code identifying the country
     * @example 'US'
     */
    address_country?: string;

    /**
     * Used to add a card to an account
     * NOTE: Currently, the only supported currency for debit card payouts is 'usd'
     */
    currency?: string;
}

// --- RESPONSE FROM STRIPE WHEN CREATING OR FETCHING A TOKEN --- //
export interface TokenResult {
    /**
     * The generated string that can be used for communication with the backend
     */
    token?: Token;

    /**
     * There was an error. This includes client-side validation errors.
     */
    error?: StripeError;
}

// --- DATA TO CREATE A PERSONAL TOKEN --- //
export interface PiiTokenData {
    /**
     * The personal ID number
     */
    personal_id_number: string;
}

// --- DATA TO CREATE A TOKEN BASED ON BANK INFORMATION --- //
export interface IBANTokenData {
    /**
     * Three-letter ISO code for the currency paid out to the bank account
     * @example 'usd'
     */
    currency: string;

    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name: string;

    /**
     * The type of entity that holds the account.
     */
    account_holder_type: 'individual' | 'company';
}

export interface BankTokenData extends IBANTokenData {
    /**
     * The 2-digit country ISO code
     * @example 'US'
     */
    country: string;

    /**
     * The bank account number
     */
    account_number: string;

    /**
     * The routing transit number for the bank account
     * NOTE: This is optional if the {@link BankTokenData.currency} is 'eur'
     */
    routing_number?: string;
}
