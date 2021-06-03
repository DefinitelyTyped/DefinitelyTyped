// Type definitions for non-npm package stronghold-pay-js-browser 2.0
// Project: https://docs.strongholdpay.com/stronghold-pay-js/
// Definitions by: Adrien Etienne <https://github.com/AdrienEtienne>
//                Sean Bennett <https://github.com/itsseanbennett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="jquery" />

export = Stronghold;

declare global {
    namespace Stronghold {
        /**
         * Different Stronghold Pay environments
         */
        enum ENVIRONMENT {
            sandbox = "sandbox",
            live = "live"
        }
        const HOST = "https://api.strongholdpay.com";
        enum EVENT {
            EXIT = "exit",
            SUCCESS = "success",
            ERROR = "error",
            READY = "ready"
        }
        enum ERROR_TYPE {
            API_ERROR = "api_error",
            AUTH_ERROR = "auth_error",
            INVALID_REQUEST_ERROR = "invalid_request_error",
            OBJECT_ERROR = "object_error",
            VALIDATION_ERROR = "validation_error"
        }
        enum ERROR_CODE {
            SERVER_ERROR = "server_error",
            CONNECTION_ERROR = "connection_error",
            MERCHANT_SOFTWARE_ERROR = "merchant_software_error",
            INVALID_API_KEY = "invalid_api_key",
            LIVE_NOT_APPROVED = "live_not_approved",
            FORBIDDEN_RESOURCE = "forbidden_resource",
            INVALID_ACCESS_TOKEN = "invalid_access_token",
            NOT_FOUND = "not_found",
            INVALID_ID = "invalid_id",
            TICKET_NOT_FOUND = "ticket_not_found",
            DISPENSARY_NOT_FOUND = "dispensary_not_found",
            SANDBOX_ONLY = "sandbox_only",
            INVALID_OPERATION = "invalid_operation",
            PAYMENT_SOURCE_ALREADY_EXISTS = "payment_source_already_exists",
            PAYMENT_SOURCE_LOGIN_REQUIRED = "payment_source_login_required",
            PAYMENT_SOURCE_UNAVAILABLE = "payment_source_unavailable",
            PAYMENT_SOURCE_LOGIN_UNAVAILABLE = "payment_source_login_unavailable",
            PAYMENT_SOURCE_INACTIVE = "payment_source_inactive",
            PAYMENT_SOURCE_ACTION_REQUIRED = "payment_source_action_required",
            INSUFFICIENT_BALANCE = "insufficient_balance",
            CUSTOMER_BLOCKED = "customer_blocked",
            PAY_LINK_CANCELED = "pay_link_canceled",
            PAY_LINK_EXPIRED = "pay_link_expired",
            PAY_LINK_ALREADY_USED = "pay_link_already_used",
            INVALID_CHARGE_AMOUNT = "invalid_charge_amount",
            MISSING_FIELD = "missing_field",
            INVALID_FIELD = "invalid_field",
            VALUE_TAKEN = "value_taken"
        }
        enum ERROR_MESSAGE {
            AMOUNT_BAD_FORMAT = "The 'amount' option was unable to be parsed as number.",
            BAD_ENVIRONMENT = "Invalid environment provided. Expect \"live\" or \"sandbox\".",
            ATTRIBUTE_REQUIRED = "Attribute is required."
        }
        class StrongholdPayError extends Error {
            type: ERROR_TYPE;
            code: ERROR_CODE;
            property: string | null;
            constructor(type: ERROR_TYPE, code: ERROR_CODE, message: string, property?: string | null);
        }
        interface ClientOptions {
            environment: ENVIRONMENT;
            publishableKey: string;
            host?: string;
        }
        type AddPaymentSourceOnSuccess = (paymentSource: PaymentSource) => void;
        type UpdatePaymentSourceOnSuccess = (paymentSource: PaymentSource) => void;
        type ChargeOnSuccess = (charge: Charge) => void;
        type TipOnSuccess = (tip: Tip) => void;
        type OnExit = () => void;
        type OnReady = () => void;
        type OnError = (error: StrongholdPayError) => void;
        type OnEvent = (event: StrongholdMessageEvent) => void;
        interface Options {
            onExit?: OnExit;
            onError?: OnError;
            onEvent?: OnEvent;
            onReady?: OnReady;
        }
        interface AddPaymentSourceOptions extends Options {
            onSuccess: AddPaymentSourceOnSuccess;
        }
        interface UpdatePaymentSourceOptions extends Options {
            onSuccess?: UpdatePaymentSourceOnSuccess;
            paymentSourceId: string;
        }
        interface ChargeOptions extends Options {
            charge: ChargeDropin;
            tip?: TipDataDropin;
            authorizeOnly?: boolean;
            onSuccess: ChargeOnSuccess;
        }
        interface TipOptions extends Options {
            tip: TipDropin;
            authorizeOnly?: boolean;
            onSuccess: TipOnSuccess;
        }
        interface StrongholdMessageEvent extends MessageEvent {
            data: {
                event: EVENT;
                payload: {
                    err: StrongholdPayError | null;
                    data: any;
                };
            };
        }
        interface ChargeDropin {
            /**
             * The amount to charge, specified in the smallest divisible currency unit. For example, number of cents of United States dollar.
             */
            amount: number;
            paymentSourceId: string;
            externalId?: string;
        }
        interface TipDataDropin {
            /**
             * The amount to charge, specified in the smallest divisible currency unit. For example, number of cents of United States dollar.
             */
            amount: number;
            beneficiaryName: string;
            details?: {
                displayMessage?: string;
                terminalId?: string;
                drawerId?: string;
            };
        }
        interface TipDropin extends TipDataDropin {
            chargeId: string;
            paymentSourceId: string;
        }
        interface PaymentSource {
            id: string;
            type: 'bank';
            label: string;
        }
        enum CHARGE_TYPE {
            BANK_DEBIT = "bank_debit",
            BANK_DEBIT_CUSTOMER_NOT_PRESENT = "bank_debit_cnp"
        }
        enum CHARGE_STATUS {
            CREATED = "created",
            AUTHORIZED = "authorized",
            CAPTURED = "captured",
            CANCELED = "canceled",
            ATTEMPTING_COLLECTION = "attempting_collection",
            CAPTURE_FAILED = "capture_failed",
            DISPUTED = "disputed",
            REFUND_PENDING = "refund_pending",
            REFUNDED = "refunded"
        }
        interface Charge {
            id: string;
            type: CHARGE_TYPE;
            status: CHARGE_STATUS;
            amount: number;
            created_at: string;
        }
        interface Tip {
            id: string;
            created_at: string;
            amount: number;
            beneficiary_name: string;
            details?: {
                display_message?: string;
                terminal_id?: string;
                drawer_id?: string;
            };
            charge_id: string;
            payment_source_id: string;
        }
        function frameForSrc(src: string): JQuery;
        function getOptionQuery(options: Options): {
            [key: string]: string | number | boolean | undefined;
        };
        function getChargeQuery(charge?: ChargeDropin): {
            [key: string]: string | number | boolean | undefined;
        };
        function getTipQuery(tip?: TipDataDropin | TipDropin): {
            [key: string]: string | number | boolean | undefined;
        };
        class Client {
            private _currentFrame;
            private _publishableKey;
            private _customerToken;
            private _onExit;
            private _onError;
            private _onEvent;
            private _onReady;
            _environment: ENVIRONMENT;
            _host: string;
            constructor(options: ClientOptions);
            private setOptions;
            private cleanFrame;
            private isValidEvent;
            private exit;
            private error;
            private ready;
            private buildFrame;
            private addEventListener;
            private setCustomerToken;
            addPaymentSource(customerToken: string, options: AddPaymentSourceOptions): void;
            updatePaymentSource(customerToken: string, options: UpdatePaymentSourceOptions): void;
            charge(customerToken: string, options: ChargeOptions): void;
            tip(customerToken: string, options: TipOptions): void;
        }
        function Pay(options: ClientOptions): Client;
    }
}
