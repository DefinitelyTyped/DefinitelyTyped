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
        /**
         * @description Use either TPDirect.googlePay.getPrime(callback) or TPDirect.googlePay.setupGooglePayButton({getPrimeCallback})
         */
        getPrimeCallback?: (
            err: {
                status: number;
                msg: string;
                originalError: string | Error;
            },
            prime: Pick<BaseResult, "prime">,
            result: Pick<BaseResult, "client_ip"> & MerchantReferenceInfo & {
                card_info: CardInfoV1;
            }
        ) => void;
    }): void;

    setupTransactionPrice(transactionPrice: {
        price: string;
        currency: string;
    }): void;

    /**
     * @description Use either TPDirect.googlePay.getPrime(callback) or TPDirect.googlePay.setupGooglePayButton({getPrimeCallback})
     */
    getPrime(callback: (
            err: {
                status: number;
                msg: string;
                originalError: string | Error;
            },
            prime: Pick<BaseResult, "prime">,
            result: Pick<BaseResult, "client_ip"> & {
                card_info: CardInfoV1;
                merchant_reference_info: {
                    affiliate_codes: string[];
                };
            }
        ) => void): void;
}
