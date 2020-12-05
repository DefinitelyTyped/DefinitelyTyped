/// <reference path="common.d.ts" />

type AuthMethods = "PAN_ONLY" | "CRYPTOGRAM_3DS";

interface GooglePay {
    setupGooglePay(setting: {
        googleMerchantId: string;
        allowedCardAuthMethods: AuthMethods[];
        merchantName: string;
        billingAddressFormat: "FULL" | "MIN";
        allowPrepaidCards: boolean;
        allowedCountryCodes: string[]
        emailRequired?: boolean;
        shippingAddressRequired?: boolean;
        billingAddressRequired?: boolean;
        phoneNumberRequired?: boolean;
    }): void;

    setupPaymentRequest(paymentReqeuestData: {
        allowedNetworks: AllowedNetworks[];
        price?: string;
        currency?: string;
    }): void;

    setupGooglePayButton(setting: {
        el: string;
        color: "black" | "white";
        type: "long" | "short";
        getPrimeCallback: (
            err: {
                status: number;
                msg: string;
                originalError: string | Error;
            },
            prime: Pick<BaseResult, "prime">,
            result: Pick<BaseResult, "client_ip"> & {
                card_info: CardInfoV2;
            } & {
                merchant_reference_info: {
                    affiliate_codes: string[];
                };
            }
        ) => void;
    }): void;

    setupTransactionPrice(transactionPrice: {
        price: string;
        currency: string;
    }): void;

    getPrime(callback: (
            err: {
                status: number;
                msg: string;
                originalError: string | Error;
            },
            prime: Pick<BaseResult, "prime">,
            result: Pick<BaseResult, "client_ip"> & {
                card_info: CardInfoV2;
            } & {
                merchant_reference_info: {
                    affiliate_codes: string[];
                };
            }
        ) => void): void;
}
