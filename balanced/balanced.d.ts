// Type definitions for balanced 1.1
// Project: https://github.com/balanced/balanced-js
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Balanced {
    
    interface ErrorObject {
        description: string;
        status: string;
        category_code: string;
        status_code: number;
        category_type: string;
        extras: any;
    }

    interface BalancedInitArgs {
        marketplace_href?: string;
        server?: string;
    }

    interface CallbackFunctionArgs {
        errors?: ErrorObject[];
        status_code: number;
    }

    interface Address {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        postal_code?: string;
        country_code?: string;
    }

    interface CallbackFunction {
        (args: CallbackFunctionArgs): void;
    }

    interface CreditCard {
        number: string;
        expiration_month: string;
        expiration_year: string;
        cvv?: string;
        name?: string;
        address?: Address;
    }

    interface CreditCardStatic {
        isCardNumberValid(cardNumber: string): boolean;
        cardType(cardNumber: string): string;
        isCVVValid(cardNumber: string, cvv: string): boolean;
        isCVVValid(cardNumber: string, cvv: number): boolean;
        isSecurityCodeValid(cardNumber: string, securityCode: string): boolean;
        isSecurityCodeValid(cardNumber: string, securityCode: number): boolean;
        isExpiryValid(expiryMonth: string, expiryYear: string): boolean;
        validate(cardData: CreditCard): ErrorObject[];
        create(data: CreditCard, callback: CallbackFunction): void;
    }

    interface BankAccount {
        name: string;
        routing_number: string;
        account_number: string;
        account_type: string;
    }

    interface BankAccountStatic {
        types: string[];
        validate(accountData: BankAccount): ErrorObject[];
        isRoutingNumberValid(routingNumber: string): boolean;
        validateRoutingNumber(routingNumber: string): boolean;
        lookupRoutingNumber(routingNumber: string, callback: CallbackFunction): void;
        validateType(type: string): boolean;
        create(data: BankAccount, callback: CallbackFunction): void;
    }

    interface EmailAddressStatic {
        validate(emailAddress: string): boolean;
    }

    interface BalancedStatic {
        init(marketplaceHref: string): void;
        init(args: BalancedInitArgs): void;

        card: CreditCardStatic;
        bankAccount: BankAccountStatic;
        emailAddress: EmailAddressStatic;
    }
}

declare var balanced: Balanced.BalancedStatic;

declare module "balanced" {
    export = balanced;
}

