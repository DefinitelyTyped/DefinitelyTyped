// Type definitions for stripe
// Project: https://stripe.com/
// Definitions by: Eric J. Smith <https://github.com/ejsmith/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface StripeStatic {
    setPublishableKey(key: string): void;
    validateCardNumber(cardNumber: string): boolean;
    validateExpiry(month: string, year: string): boolean;
    validateCVC(cardCVC: string): boolean;
    cardType(cardNumber: string): string;
    getToken(token: string, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
    card: StripeCardData;
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
    message: string;
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

    createToken(data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
}

declare var Stripe: StripeStatic;
