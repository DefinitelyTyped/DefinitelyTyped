/// <reference types="node" />

declare namespace YandexMoneySDK {
    namespace Wallet {
        interface GetAccessTokenResult {
            access_token?: string | undefined;
            error?: string | undefined;
        }

        interface SendAuthenticatedRequestParams {
            headers?: any;
            data?: any;
            url: string;
        }

        interface AccountInfoResult {
            account: string;
            balance: number;
            currency: string;
            account_status: string;
            account_type: string;
            avatar?: {
                url: string;
                ts: string;
            } | undefined;
            balance_details?: {
                total: number;
                available: number;
                deposition_pending?: number | undefined;
                blocked?: number | undefined;
                debt?: number | undefined;
                hold?: number | undefined;
            } | undefined;
            cards_linked?: {
                pan_fragment?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
        }

        interface OperationHistoryOptions {
            type: string;
            label?: string | undefined;
            from?: string | Date | undefined;
            till?: string | Date | undefined;
            start_record?: string | undefined;
            records?: number | undefined;
            details?: boolean | undefined;
        }

        interface OperationHistoryResult {
            error?: string | undefined;
            next_record?: string | undefined;
            operations?: {
                operation_id: string;
                status: string;
                datetime: string;
                title: string;
                pattern_id?: string | undefined;
                direction: string;
                amount: number;
                label?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
        }

        interface OperationDetailsResult {
            error?: string | undefined;
            operation_id?: string | undefined;
            status?: string | undefined;
            pattern_id?: string | undefined;
            direction?: string | undefined;
            amount?: number | undefined;
            amount_due?: number | undefined;
            fee?: number | undefined;
            datetime?: string | undefined;
            title?: string | undefined;
            sender?: string | undefined;
            recipient?: string | undefined;
            recipient_type?: string | undefined;
            message?: string | undefined;
            comment?: string | undefined;
            codepro?: boolean | undefined;
            protection_code?: string | undefined;
            expires?: string | undefined;
            answer_datetime?: string | undefined;
            label?: string | undefined;
            details?: string | undefined;
            type?: string | undefined;
            digital_goods?: {
                article: {
                    merchantArticleId: string;
                    serial: string;
                    secret: string;
                }[];
                bonus: {
                    serial: string;
                    secret: string;
                }[];
            } | undefined;
        }

        interface RequestPaymentOptions {
            pattern_id: string;
            to?: string | undefined;
            amount?: number | undefined;
            amount_due?: number | undefined;
            comment?: string | undefined;
            message?: string | undefined;
            label?: string | undefined;
            codepro?: boolean | undefined;
            hold_for_pickup?: boolean | undefined;
            expire_period?: number | undefined;
            "phone-number"?: string | undefined;
            [key: string]: any;

            test_payment?: boolean | undefined;
            test_card?: string | undefined;
            test_result?: string | undefined;
        }

        interface RequestPaymentResult {
            status: string;
            error?: string | undefined;
            money_source?: {
                wallet?: {
                    allowed: boolean;
                } | undefined;
                cards?: {
                    allowed: boolean;
                    csc_required: boolean;
                    items: {
                        id: string;
                        pan_fragment: string;
                        type: string;
                    }[];
                } | undefined;
            } | undefined;
            request_id?: string | undefined;
            contract_amount?: number | undefined;
            balance?: number | undefined;
            recipient_account_status?: string | undefined;
            recipient_account_type?: string | undefined;
            protection_code?: string | undefined;
            account_unblock_uri?: string | undefined;
            ext_action_uri?: string | undefined;
        }

        interface ProcessPaymentOptions {
            request_id: string;
            money_source?: string | undefined;
            csc?: string | undefined;
            ext_auth_success_uri?: string | undefined;
            ext_auth_fail_uri?: string | undefined;

            test_payment?: boolean | undefined;
            test_card?: string | undefined;
            test_result?: string | undefined;
        }

        interface ProcessPaymentResult {
            status: string;
            error?: string | undefined;
            payment_id?: string | undefined;
            balance?: number | undefined;
            invoice_id?: string | undefined;
            payer?: string | undefined;
            payee?: string | undefined;
            credit_amount?: number | undefined;
            account_unblock_uri?: string | undefined;
            hold_for_pickup_link?: string | undefined;
            acs_uri?: string | undefined;
            acs_params?: {
                MD: string;
                PaReq: string;
                [key: string]: any;
            } | undefined;
            next_retry?: number | undefined;
            digital_goods?: {
                article: {
                    merchantArticleId: string;
                    serial: string;
                    secret: string;
                }[];
                bonus: {
                    serial: string;
                    secret: string;
                }[];
            } | undefined;
        }

        interface IncomingTransferAcceptResult {
            status: string;
            error?: string | undefined;
            protection_code_attempts_available?: number | undefined;
            ext_action_uri?: string | undefined;
        }

        interface IncomingTransferRejectResult {
            status: string;
            error?: string | undefined;
        }
    }

    namespace ExternalPayment {
        interface GetInstanceIdResult {
            status: string;
            error?: string | undefined;
            instance_id?: string | undefined;
        }

        interface RequestOptions {
            pattern_id: string;
            // instance_id: string; // the method always overwrites this value
            to?: string | undefined;
            amount?: number | undefined;
            amount_due?: number | undefined;
            message?: string | undefined;
            [key: string]: any;
        }

        interface RequestResult {
            status: string;
            error?: string | undefined;
            request_id?: string | undefined;
            contract_amount?: number | undefined;
            title?: string | undefined;
        }

        interface ProcessOptions {
            request_id: string;
            // instance_id: string; // the method always overwrites this value
            ext_auth_success_uri: string;
            ext_auth_fail_uri: string;
            request_token?: boolean | undefined;
            money_source_token?: string | undefined;
            csc?: string | undefined;
        }

        interface ProcessResult {
            status: string;
            error?: string | undefined;
            acs_uri?: string | undefined;
            acs_params?: {
                MD: string;
                PaReq: string;
                [key: string]: any;
            } | undefined;
            money_source?: {
                type: string;
                payment_card_type: string;
                pan_fragment?: string | undefined;
                money_source_token?: string | undefined;
            } | undefined;
            next_retry?: number | undefined;
            invoice_id?: string | undefined;
        }
    }
}

declare module "yandex-money-sdk" {
    import * as http from "http";

    export interface ResponseCallback<TBody> {
        (err: any, body: TBody, response: http.IncomingMessage): any;
    }

    export interface WalletStatic {
        new(accessToken: string): Wallet;
        buildObtainTokenUrl(clientId: string, redirectURI: string, scope: string[]): string;
        getAccessToken(
            clientId: string,
            code: string,
            redirectURI: string,
            clientSecret: string,
            callback: ResponseCallback<YandexMoneySDK.Wallet.GetAccessTokenResult>,
        ): void;
        revokeToken(token: string, revoke_all: any, callback: ResponseCallback<any>): void; // revoke_all missing in documentation
    }

    export interface Wallet {
        sendAuthenticatedRequest(
            params: YandexMoneySDK.Wallet.SendAuthenticatedRequestParams,
            callback: ResponseCallback<any>,
        ): void;
        accountInfo(callback: ResponseCallback<YandexMoneySDK.Wallet.AccountInfoResult>): void;
        operationHistory(
            options: YandexMoneySDK.Wallet.OperationHistoryOptions,
            callback: ResponseCallback<YandexMoneySDK.Wallet.OperationHistoryResult>,
        ): void;
        operationDetails(
            operation_id: string,
            callback: ResponseCallback<YandexMoneySDK.Wallet.OperationDetailsResult>,
        ): void;
        requestPayment(
            options: YandexMoneySDK.Wallet.RequestPaymentOptions,
            callback: ResponseCallback<YandexMoneySDK.Wallet.RequestPaymentResult>,
        ): void;
        processPayment(
            options: YandexMoneySDK.Wallet.ProcessPaymentOptions,
            callback: ResponseCallback<YandexMoneySDK.Wallet.ProcessPaymentResult>,
        ): void;
        incomingTransferAccept(
            operation_id: string,
            protectionCode: string,
            callback: ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferAcceptResult>,
        ): void;
        incomingTransferReject(
            operation_id: string,
            callback: ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferRejectResult>,
        ): void;
    }

    export interface ExternalPaymentStatic {
        new(instanceId: string): ExternalPayment;
        getInstanceId(
            clientId: string,
            callback: ResponseCallback<YandexMoneySDK.ExternalPayment.GetInstanceIdResult>,
        ): void;
    }

    export interface ExternalPayment {
        request(
            options: YandexMoneySDK.ExternalPayment.RequestOptions,
            callback: ResponseCallback<YandexMoneySDK.ExternalPayment.RequestResult>,
        ): void;
        process(
            options: YandexMoneySDK.ExternalPayment.ProcessOptions,
            callback: ResponseCallback<YandexMoneySDK.ExternalPayment.ProcessResult>,
        ): void;
    }

    export interface Config {
        MONEY_URL: string;
        SP_MONEY_URL: string;
    }

    export var Wallet: WalletStatic;
    export var ExternalPayment: ExternalPaymentStatic;
    export var Config: Config;
}
