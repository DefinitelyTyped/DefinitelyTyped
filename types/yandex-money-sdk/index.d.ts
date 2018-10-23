// Type definitions for NodeJS Yandex.Money API SDK
// Project: https://github.com/yandex-money/yandex-money-sdk-nodejs
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace YandexMoneySDK {
	namespace Wallet {
		interface GetAccessTokenResult {
			access_token?: string;
			error?: string;
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
			};
			balance_details?: {
				total: number;
				available: number;
				deposition_pending?: number;
				blocked?: number;
				debt?: number;
				hold?: number;
			}
			cards_linked?: {
				pan_fragment?: string;
				type?: string;
			}[];
		}

		interface OperationHistoryOptions {
			type: string;
			label: string;
			from?: string|Date;
			till?: string|Date;
			start_record?: string;
			records?: number;
			details?: boolean;
		}

		interface OperationHistoryResult {
			error?: string;
			next_record?: string;
			operations?: {
				operation_id: string;
				status: string;
				datetime: string;
				title: string;
				pattern_id?: string;
				direction: string;
				amount: number;
				label?: string;
				type?: string;
			}[];
		}

		interface OperationDetailsResult {
			error?: string;
			operation_id?: string;
			status?: string;
			pattern_id?: string;
			direction?: string;
			amount?: number;
			amount_due?: number;
			fee?: number;
			datetime?: string;
			title?: string;
			sender?: string;
			recipient?: string;
			recipient_type?: string;
			message?: string;
			comment?: string;
			codepro?: boolean;
			protection_code?: string;
			expires?: string;
			answer_datetime?: string;
			label?: string;
			details?: string;
			type?: string;
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
			};
		}

		interface RequestPaymentOptions {
			pattern_id: string;
			to?: string;
			amount?: number;
			amount_due?: number;
			comment?: string;
			message?: string;
			label?: string;
			codepro?: boolean;
			hold_for_pickup?: boolean;
			expire_period?: number;
			'phone-number'?: string;
			[key: string]: any

			test_payment?: boolean;
			test_card?: string;
			test_result?: string;
		}

		interface RequestPaymentResult {
			status: string;
			error?: string;
			money_source?: {
				wallet?: {
					allowed: boolean;
				};
				cards?: {
					allowed: boolean;
					csc_required: boolean;
					items: {
						id: string;
						pan_fragment: string;
						type: string;
					}[];
				};
			};
			request_id?: string;
			contract_amount?: number;
			balance?: number;
			recipient_account_status?: string;
			recipient_account_type?: string;
			protection_code?: string;
			account_unblock_uri?: string;
			ext_action_uri?: string;
		}

		interface ProcessPaymentOptions {
			request_id: string;
			money_source?: string;
			csc?: string;
			ext_auth_success_uri?: string;
			ext_auth_fail_uri?: string;

			test_payment?: boolean;
			test_card?: string;
			test_result?: string;
		}

		interface ProcessPaymentResult {
			status: string;
			error?: string;
			payment_id?: string;
			balance?: number;
			invoice_id?: string;
			payer?: string;
			payee?: string;
			credit_amount?: number;
			account_unblock_uri?: string;
			hold_for_pickup_link?: string;
			acs_uri?: string;
			acs_params?: {
				MD: string;
				PaReq: string;
				[key: string]: any
			};
			next_retry?: number;
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
			};
		}

		interface IncomingTransferAcceptResult {
			status: string;
			error?: string;
			protection_code_attempts_available?: number;
			ext_action_uri?: string;
		}

		interface IncomingTransferRejectResult {
			status: string;
			error?: string;
		}
	}

	namespace ExternalPayment {
		interface GetInstanceIdResult {
			status: string;
			error?: string;
			instance_id?: string;
		}

		interface RequestOptions {
			pattern_id: string;
			// instance_id: string; // the method always overwrites this value
			to?: string;
			amount?: number;
			amount_due?: number;
			message?: string;
			[key: string]: any;
		}

		interface RequestResult {
			status: string;
			error?: string;
			request_id?: string;
			contract_amount?: number;
			title?: string;
		}

		interface ProcessOptions {
			request_id: string;
			// instance_id: string; // the method always overwrites this value
			ext_auth_success_uri: string;
			ext_auth_fail_uri: string;
			request_token?: boolean;
			money_source_token?: string;
			csc?: string;
		}

		interface ProcessResult {
			status: string;
			error?: string;
			acs_uri?: string;
			acs_params?: {
				MD: string;
				PaReq: string;
				[key: string]: any
			};
			money_source?: {
				type: string;
				payment_card_type: string;
				pan_fragment?: string;
				money_source_token?: string;
			};
			next_retry?: number;
			invoice_id?: string;
		}
	}
}

declare module "yandex-money-sdk" {
	import * as http from 'http';

	export interface ResponseCallback<TBody> {
		(err: any, body: TBody, response: http.IncomingMessage): any;
	}

	export interface WalletStatic {
		new (accessToken: string): Wallet;
		buildObtainTokenUrl(clientId: string, redirectURI: string, scope: string[]): string;
		getAccessToken(clientId: string, code: string, redirectURI: string, clientSecret: string, callback: ResponseCallback<YandexMoneySDK.Wallet.GetAccessTokenResult>): void;
		revokeToken(token: string, revoke_all: any, callback: ResponseCallback<any>): void; // revoke_all missing in documentation
	}

	export interface Wallet {
		sendAuthenticatedRequest(params: YandexMoneySDK.Wallet.SendAuthenticatedRequestParams, callback: ResponseCallback<any>): void;
		accountInfo(callback: ResponseCallback<YandexMoneySDK.Wallet.AccountInfoResult>): void;
		operationHistory(options: YandexMoneySDK.Wallet.OperationHistoryOptions, callback: ResponseCallback<YandexMoneySDK.Wallet.OperationHistoryResult>): void;
		operationDetails(operation_id: string, callback: ResponseCallback<YandexMoneySDK.Wallet.OperationDetailsResult>): void;
		requestPayment(options: YandexMoneySDK.Wallet.RequestPaymentOptions, callback: ResponseCallback<YandexMoneySDK.Wallet.RequestPaymentResult>): void;
		processPayment(options: YandexMoneySDK.Wallet.ProcessPaymentOptions, callback: ResponseCallback<YandexMoneySDK.Wallet.ProcessPaymentResult>): void;
		incomingTransferAccept(operation_id: string, protectionCode: string, callback: ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferAcceptResult>): void;
		incomingTransferReject(operation_id: string, callback: ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferRejectResult>): void;
	}

	export interface ExternalPaymentStatic {
		new (instanceId: string): ExternalPayment;
		getInstanceId(clientId: string, callback: ResponseCallback<YandexMoneySDK.ExternalPayment.GetInstanceIdResult>): void;
	}

	export interface ExternalPayment {
		request(options: YandexMoneySDK.ExternalPayment.RequestOptions, callback: ResponseCallback<YandexMoneySDK.ExternalPayment.RequestResult>): void;
		process(options: YandexMoneySDK.ExternalPayment.ProcessOptions, callback: ResponseCallback<YandexMoneySDK.ExternalPayment.ProcessResult>): void;
	}

	export interface Config {
		MONEY_URL: string;
		SP_MONEY_URL: string;
	}

	export var Wallet: WalletStatic;
	export var ExternalPayment: ExternalPaymentStatic;
	export var Config: Config;
}
