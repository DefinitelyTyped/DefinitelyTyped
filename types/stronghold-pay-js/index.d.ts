// Type definitions for stronghold-pay-js 1.0
// Project: https://docs.strongholdpay.com/stronghold-pay-js/
// Definitions by: Adrien Etienne <https://github.com/AdrienEtienne>
//                Sean Bennett <https://github.com/itsseanbennett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="jquery" />

export = Stronghold;

declare global {
    namespace Stronghold {
        export enum ENVIRONMENT {
            sandbox = "sandbox",
            live = "live"
        }
        export const HOST = "https://api.strongholdpay.com";
        export enum EVENT {
            EXIT = "exit",
            SUCCESS = "success",
            ERROR = "error",
            READY = "ready"
        }
        export enum ERROR_TYPE {
            API_ERROR = "api_error",
            AUTHENTICATION_ERROR = "authentication_error",
            INVALID_REQUEST_ERROR = "invalid_request_error",
            OBJECT_ERROR = "object_error",
            VALIDATION_ERROR = "validation_error"
        }
        export enum ERROR_CODE {
            SERVER_ERROR = "server_error",
            CONNECTION_ERROR = "connection_error",
            INVALID_API_KEY = "invalid_api_key",
            FORBIDDEN_RESOURCE = "forbidden_resource",
            INVALID_ACCESS_TOKEN = "invalid_access_token",
            NOT_FOUND = "not_found",
            INVALID_ID = "invalid_id",
            TICKET_NOT_FOUND = "ticket_not_found",
            DISPENSARY_NOT_FOUND = "dispensary_not_found",
            PAYMENT_SOURCE_ALREADY_EXISTS = "payment_source_already_exists",
            PAYMENT_SOURCE_LOGIN_REQUIRED = "payment_source_login_required",
            PAYMENT_SOURCE_UNAVAILABLE = "payment_source_unavailable",
            PAYMENT_SOURCE_LOGIN_UNAVAILABLE = "payment_source_login_unavailable",
            INSUFFICIENT_BALANCE = "insufficient_balance",
            CUSTOMER_BLOCKED = "customer_blocked",
            PAY_LINK_CANCELED = "pay_link_canceled",
            PAY_LINK_EXPIRED = "pay_link_expired",
            PAY_LINK_ALREADY_USED = "pay_link_already_used",
            MISSING_FIELD = "missing_field",
            INVALID_FIELD = "invalid_field",
            VALUE_TAKEN = "value_taken"
        }
        export enum ERROR_MESSAGE {
            AMOUNT_BAD_FORMAT = "The 'amount' option was unable to be parsed as number.",
            BAD_ENVIRONMENT = "Invalid environment provided. Expect \"live\" or \"sandbox\".",
            ATTRIBUTE_REQUIRED = "Attribute is required."
        }
        export class StrongholdPayError extends Error {
            type: ERROR_TYPE;
            code: ERROR_CODE;
            property: string | null;
            constructor(type: ERROR_TYPE, code: ERROR_CODE, message: string, property?: string | null);
        }
        export interface ClientOptions {
            environment: ENVIRONMENT;
            host?: string;
            publishableKey: string;
        }
        export type AddPaymentSourceOnSuccess = (paymentSource: PaymentSource) => void;
        export type UpdatePaymentSourceOnSuccess = (paymentSource: PaymentSource) => void;
        export type ChargeOnSuccess = (charge: Charge) => void;
        export type TipOnSuccess = (tip: Tip) => void;
        export type OnExit = () => void;
        export type OnReady = () => void;
        export type OnError = (error: StrongholdPayError) => void;
        export type OnEvent = (event: StrongholdMessageEvent) => void;
        export interface Options {
            onExit?: OnExit;
            onError?: OnError;
            onEvent?: OnEvent;
            onReady?: OnReady;
        }
        export interface AddPaymentSourceOptions extends Options {
            onSuccess: AddPaymentSourceOnSuccess;
        }
        export interface UpdatePaymentSourceOptions extends Options {
            onSuccess?: UpdatePaymentSourceOnSuccess;
            paymentSourceId: string;
        }
        export interface ChargeOptions extends Options {
            onSuccess: ChargeOnSuccess;
            charge: ChargeDropin;
            tip?: TipDataDropin;
            authorizeOnly?: boolean;
        }
        export interface TipOptions extends Options {
            onSuccess: TipOnSuccess;
            tip: TipDropin;
            authorizeOnly?: boolean;
        }
        export interface StrongholdMessageEvent extends MessageEvent {
            data: {
                event: EVENT;
                payload: {
                    err: StrongholdPayError | null;
                    data: any;
                };
            };
        }
        export interface ChargeDropin {
            amount: number;
            paymentSourceId: string;
        }
        export interface TipDataDropin {
            amount: number;
            beneficiaryName: string;
            details?: {
                displayMessage?: string;
                terminalId?: string;
                drawerId?: string;
            };
        }
        export interface TipDropin extends TipDataDropin {
            chargeId: string;
            paymentSourceId: string;
        }
        export interface PaymentSource {
            id: string;
            type: 'bank';
            label: string;
        }
        export enum CHARGE_TYPE {
            BANK_DEBIT = "bank_debit",
            BANK_DEBIT_CUSTOMER_NOT_PRESENT = "bank_debit_cnp"
        }
        export enum CHARGE_STATUS {
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
        export interface Charge {
            id: string;
            type: CHARGE_TYPE;
            status: CHARGE_STATUS;
            amount: number;
            created_at: string;
        }
        export interface Tip {
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
        export function frameForSrc(src: string): JQuery;
        export function getChargeQuery(charge?: ChargeDropin): {
            [key: string]: string | number | boolean | undefined;
        };
        export function getTipQuery(tip?: TipDataDropin | TipDropin): {
            [key: string]: string | number | boolean | undefined;
        };
        export class Client {
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
        export function Pay(options: ClientOptions): Client;
    }
}
