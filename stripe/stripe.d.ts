// Type definitions for stripe
// Project: https://stripe.com/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com>, Eric J. Smith <https://github.com/ejsmith/>, Amrit Kahlon <https://github.com/amritk/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface StripeStatic {
    setPublishableKey(key: string): void;
    validateCardNumber(cardNumber: string): boolean;
    validateExpiry(month: string, year: string): boolean;
    validateCVC(cardCVC: string): boolean;
    cardType(cardNumber: string): string;
    getToken(token: string, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
    card: StripeCardData;
    createToken(data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
    bankAccount: StripeBankAccount;
}

interface StripeTokenData {
    number: string;
    exp_month: number;
    exp_year: number;
    cvc?: string;
    name?: string;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_state?: string;
    address_zip?: string;
    address_country?: string;
}

interface StripeTokenResponse {
    id: string;
    card: StripeCardData;
    created: number;
    currency: string;
    livemode: boolean;
    object: string;
    used: boolean;
    error: StripeError;
}

interface StripeError {
    type: string;
    code: string;
    message: string;
    param?: string;
}

interface StripeCardData {
    object: string;
    last4: string;
    type: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    country?: string;
    name?: string;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_state?: string;
    address_zip?: string;
    address_country?: string;
}

interface StripeBankAccount
{
    createToken(params: StripeBankTokenParams, stripeResponseHandler: (status:number, response: StripeBankTokenResponse) => void): void;
    validateRoutingNumber(routingNumber: number | string, countryCode: string): boolean;
    validateAccountNumber(accountNumber: number | string, countryCode: string): boolean;
}

interface StripeBankTokenParams
{
    country: string;
    currency: string;
    account_number: number | string;
    routing_number?: number | string;
}

interface StripeBankTokenResponse
{
    id: string;
    bank_account: {
        id: string;
        country: string;
        bank_name: string;
        last4: number;
        validated: boolean;
        object: string;
    };
    created: number;
    livemode: boolean;
    type: string;
    object: string;
    used: boolean;
    error: StripeError;
}

declare var Stripe: StripeStatic;
declare module "Stripe" {
    export = StripeStatic;
}
