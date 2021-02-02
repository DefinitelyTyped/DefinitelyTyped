// Type definitions for openpay 1.0.4
// Project: https://github.com/open-pay/openpay-node
// Definitions by: Bruno Jardón <https://github.com/bjardon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace openpay;
export = Openpay;

declare class Openpay {
    /**
     * Initializes the SDK in sandbox mode
     * @param merchantId Your merchant ID
     * @param privateKey Your private API key
     */
    constructor(merchantId: string, privateKey: string);

    /**
     * Initializes the SDK
     * @param merchantId Your merchant ID
     * @param privateKey Your private API key
     * @param isProductionReady Production mode flag, set to true to initialize the SDK in production mode
     */
    constructor(merchantId: string, privateKey: string, isProductionReady: boolean);

    /**
     * Change the merchant ID in runtime
     * @param merchantId Your merchant ID
     */
    setMerchantId(merchantId: string): void;

    /**
     * Change the private key in runtime
     * @param privateKey Your API private key
     */
    setPrivateKey(privateKey: string): void;

    /**
     * Change the SDK environment mode in runtime
     * @param isProductionReady Environment mode flag. Use true to indicate the SDK is running in production mode, use false for sandbox
     */
    setProductionReady(isProductionReady: boolean): void;

    /**
     * Change the request timeout in runtime
     * @param timeout The desired timeout in milliseconds for HTTP requests
     */
    setTimeout(timeout: number): void;

    groups: Openpay.SDK.Groups;
    merchant: Openpay.SDK.Merchant;
    charges: Openpay.SDK.Charges;
    payouts: Openpay.SDK.Payouts;
    fees: Openpay.SDK.Fees;
    plans: Openpay.SDK.Plans;
    cards: Openpay.SDK.Cards;
    customers: Openpay.SDK.Customers;
    webhooks: Openpay.SDK.Webhooks;
}

declare namespace Openpay {
    export namespace SDK {
        export interface Merchant {
            get(callback: Callback<any>): void;
        }

        export interface Charges {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(transactionId: string, callback: Callback<any>): void;
            capture(transactionId: string, data: any, callback: Callback<any>): void;
            refund(transactionId: string, data: any, callback: Callback<any>): void;
        }

        export interface Payouts {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(transactionId: string, callback: Callback<any>): void;
        }

        export interface Fees {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
        }

        export interface Customers {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(customerId: string, callback: Callback<any>): void;
            update(customerId: string, callback: Callback<any>): void;
            delete(customerId: string, callback: Callback<any>): void;
            
            charges: Customers.Charges;
            transfers: Customers.Transfers;
            payouts: Customers.Payouts;
            subscriptions: Customers.Subscriptions;
            cards: Customers.Cards;
            bankaccounts: Customers.BankAccounts;
        }

        export namespace Customers {
            export interface Charges {
                create(customerId: string, data: any, callback: Callback<any>): void;
                list(customerId: string, data: any, callback: Callback<any>): void;
                get(customerId: string, transactionId: string, callback: Callback<any>): void;
                capture(customerId: string, transactionId: string, callback: Callback<any>): void;
                refund(customerId: string, transactionId: string, data: any, callback: Callback<any>): void;
            }

            export interface Transfers {
                create(customerId: string, data: any, callback: Callback<any>): void;
                list(customerId: string, data: any, callback: Callback<any>): void;
                get(customerId: string, transactionId: string, callback: Callback<any>): void;
            }
    
            export interface Payouts {
                create(customerId: string, data: any, callback: Callback<any>): void;
                list(customerId: string, data: any, callback: Callback<any>): void;
                get(customerId: string, transactionId: string, callback: Callback<any>): void;
            }
    
            export interface Subscriptions {
                create(customerId: string, data: any, callback: Callback<any>): void;
                list(customerId: string, data: any, callback: Callback<any>): void;
                get(customerId: string, subscriptionId: string, callback: Callback<any>): void;
                update(customerId: string, subscriptionId: string, data: any, callback: Callback<any>): void;
                delete(customerId: string, subscriptionId: string, callback: Callback<any>): void;
            }
    
            export interface Cards {
                create(customerId: string, data: any, callback: Callback<any>): void;
                list(customerId: string, data: any, callback: Callback<any>): void;
                get(customerId: string, cardId: string, callback: Callback<any>): void;
                delete(customerId: string, cardId: string, callback: Callback<any>): void;
            }
    
            export interface BankAccounts {
                create(customerId: string, data: any, callback: Callback<any>): void;
                list(customerId: string, data: any, callback: Callback<any>): void;
                get(customerId: string, bankId: string, callback: Callback<any>): void;
                delete(customerId: string, bankId: string, callback: Callback<any>): void;
            }
        }

        export interface Cards {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(cardId: string, callback: Callback<any>): void;
            delete(cardId: string, callback: Callback<any>): void;
        }

        export interface Plans {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(planId: string, callback: Callback<any>): void;
            update(planId: string, data: any, callback: Callback<any>): void;
            delete(planId: string, callback: Callback<any>): void;
            listSubscriptions(planId: string, data: any, callback: Callback<any>): void;
        }

        export interface Webhooks {
            create(data: any, callback: Callback<any>): void;
            verify(webhook_id: string, verification_code: string, callback: Callback<any>): void;
            get(webhook_id: string, callback: Callback<any>): void;
            delete(webhook_id: string, callback: Callback<any>): void;
            list(callback: Callback<any>): void;
        }

        export interface Groups {
            charges: Groups.Charges;
            customers: Groups.Customers;
        }

        export namespace Groups {
            export interface Charges {
                create(merchantId: string, data: any, callback: Callback<any>): void;
                capture(merchantId: string, transactionId: string, data: any, callback: Callback<any>): void;
                refund(merchantId: string, transactionId: string, data: any, callback: Callback<any>): void;
            }
    
            export interface Customers {
                create(data: any, callback: Callback<any>): void;
                list(data: any, callback: Callback<any>): void;
                get(customerId: string, callback: Callback<any>): void;
                update(customerId: string, data: any, callback: Callback<any>): void;
                delete(customerId: string, callback: Callback<any>): void;
    
                cards: Customers.Cards;
                charges: Customers.Charges;
                subscriptions: Customers.Subscriptions;
            }

            export namespace Customers {
                export interface Cards {
                    create(customerId: string, data: any, callback: Callback<any>): void;
                    list(customerId: string, data: any, callback: Callback<any>): void;
                    get(customerId: string, cardId: string, callback: Callback<any>): void;
                    delete(customerId: string, cardId: string, callback: Callback<any>): void;
                }
        
                export interface Charges {
                    create(merchantId: string, customerId: string, data: any, callback: Callback<any>): void;
                    capture(merchantId: string, customerId: string, transactionId: string, data: any, callback: Callback<any>): void;
                    refund(merchantId: string, customerId: string, transactionId: string, data: any, callback: Callback<any>): void;
                }
        
                export interface Subscriptions {
                    create(merchantId: string, customerId: string, data: any, callback: Callback<any>): void;
                    list(merchantId: string, customerId: string, data: any, callback: Callback<any>): void;
                    get(merchantId: string, customerId: string, subscriptionId: string, callback: Callback<any>): void;
                    update(merchantId: string, customerId: string, subscriptionId: string, data: any, callback: Callback<any>): void;
                    delete(merchantId: string, customerId: string, subscriptionId: string, callback: Callback<any>): void;
                }
            }
        }

        export interface Charges {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(transactionId: string, callback: Callback<any>): void;
            capture(transactionId: string, callback: Callback<any>): void;
            refund(transactionId: string, data: any, callback: Callback<any>): void;
        }

        export interface Transfers {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(transactionId: string, callback: Callback<any>): void;
        }

        export interface Payouts {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(transactionId: string, callback: Callback<any>): void;
        }

        export interface BankAccounts {
            create(data: any, callback: Callback<any>): void;
            list(data: any, callback: Callback<any>): void;
            get(bankId: string, callback: Callback<any>): void;
            delete(bankId: string, callback: Callback<any>): void;
        }
    }

    export interface Callback<T> {
        (error: ErrorResponse | null, body: T): void;
    }
    
    export interface ErrorResponse {
        category: string;
        error_code: ResponseError | number;
        description: string;
        http_code: string;
        request_id: string;
        fraud_rules: string[];
    }
    
    export enum ResponseError {
        OpenpayInternalError = 1000,
        BadRequest = 1001,
        Unauthorized = 1002,
        UnprocessableEntity = 1003,
        ServiceUnavailable = 1004,
        NotFound = 1005,
        Conflict = 1006,
        RejectedTransaction = 1007,
        DisabledAccount = 1008,
        RequestEntityTooLarge = 1009,
        Forbidden = 1010,

        BankAccountConflict = 2001,
        CardConflict = 2002,
        CustomerExternalIdConflict = 2003,
        InvalidCardVerifyingCode = 2004,
        CardExpiredOnSave = 2005,
        MissingCardSecurityCode = 2006,
        SandboxCard = 2007,
        CardPointsUnavailable = 2008,
        InvalidCardSecurityCode = 2009,

        DeclinedCard = 3001,
        CardExpiredOnCharge = 3002,
        InsufficientCardFunds = 3003,
        StolenCard = 3004,
        FraudulentCard = 3005,
        ForbiddenOperation = 3006,
        UnsupportedCard = 3008,
        LostCard = 3009,
        RestrictedCard = 3010,
        RetainedCard = 3011,
        BankAuthorizationRequired = 3012,

        InsufficientAccountFunds = 4001
    }
}