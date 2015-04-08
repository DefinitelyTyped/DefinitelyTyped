// Type definitions for stripe
// Project: https://stripe.com/
// Definitions by: Eric J. Smith <https://github.com/ejsmith/>, jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


// Interfaces generated from documentation located 
// at https://stripe.com/docs/stripe.js

declare module Stripe {

    interface StripeStatic {
        setPublishableKey(key: string): void;

        card: StripeCardStatic;
        bankAccount: StripeBankAccountStatic;
    }

    interface StripeTokenResponse {
        id: string;
        created: number;
        livemode: boolean;
        type: string;
        object: string;
        used: boolean;

        error: StripeError;    
    }

    interface StripeCardTokenData {
        number: string;
        exp_month: number|string;
        exp_year: number|string;
        cvc?: string;
        name?: string;
        address_line1?: string;
        address_line2?: string;
        address_city?: string;
        address_state?: string;
        address_zip?: string;
        address_country?: string;
    }

    interface StripeCardTokenResponse extends StripeTokenResponse {
        card: StripeCardTokenResponseData;
    }

    interface StripeError {
        type: string;
        code: string;
        message: string;
        param: string;
    }

    interface StripeCardTokenResponseData {
        object: string;
        last4: string;
        exp_month: number;
        exp_year: number;
        country?: string;
        name?: string;
        address_line1?: string;
        address_line2?: string;
        address_city?: string;
        address_state?: string;
        address_zip?: string;
        address_country?: string;
        brand?: string;
        funding?: string;
    }

    interface StripeCardStatic {
        createToken(data: StripeCardTokenData, 
                    responseHandler: (status: number, 
                                      response: StripeCardTokenResponse) => void): void;

        validateCardNumber(number: string) : boolean;

        validateExpiry(month: string, year: string) : boolean;
        validateExpiry(month: number, year: number) : boolean;

        validateCVC(cvc: string) : boolean;

        cardType(number: string) : string;
    }

    interface StripeBankAccountTokenData {
        country: string;
        routing_number: string;
        account_number: string;
    }

    interface StripeBankAccountTokenResponseData {
        country: string;
        bank_name: string;
        last4: string;
        validated: boolean;
        object: string;
    }

    interface StripeBankAccountTokenResponse extends StripeTokenResponse {
        bank_account: StripeBankAccountTokenResponseData;
    }

    interface StripeBankAccountStatic {
        createToken(data: StripeBankAccountTokenData,
                    responseHandler: (status: number,
                                      response: StripeBankAccountTokenResponse) => void): void;

        validateRoutingNumber(routing_number: string, country: string): boolean;

        validateAccountNumber(account_number: string, country: string): boolean;
    }
}

declare var Stripe: Stripe.StripeStatic;
