/// <reference path="common.d.ts" />

interface DeferredPaymentRequest {
    /**
     * default is false
     */
    isAmountPending?: boolean | undefined;
    /**
     * default is true
     */
    isShowTotalAmount?: boolean | undefined;
}

interface PaymentRequestData {
    supportedNetworks: AllowedNetworks[];
    supportedMethods: string[];
    options?: {
        requestPayerEmail: boolean;
        requestPayerName: boolean;
        requestPayerPhone: boolean;
        requestShipping: boolean;
        shippingType: "shipping" | "delivery" | "pickup";
    } | undefined;
    shippingOptions?:
        | Array<
            PaymentRequestAmount & {
                id: string;
                detail: string;
            }
        >
        | undefined;
    displayItems: PaymentRequestAmount[];
    total: PaymentRequestAmount & DeferredPaymentRequest;
}

interface PaymentRequestApi {
    /**
     * ```markdown
     * `true` support payment request api
     * `false` doesn't support payment request api
     * ```
     */
    checkAvailability(): boolean;

    setupPaymentRequest(
        paymentRequestData: PaymentRequestData,
        callback: (result: {
            /**
             * Does Browser support Payment Request API
             */
            browserSupportPaymentRequest: boolean;
            /**
             * Does this device have card to make payment
             */
            canMakePaymentWithActiveCard: boolean;
        }) => void,
    ): void;

    setupApplePay(applePaySetting: {
        merchantIdentifier: string;
        countryCode: string;
    }): void;

    getPrime(
        callback: (
            result: BaseResult & MerchantReferenceInfo & {
                prime_expiry_millis: number;
                total_amount: string;
                payer: {
                    name: string;
                    email: string;
                    phone: string;
                };
                billingAddress: Address;
                shippingAddress: Address;
                shippingOption: string;
                methodName: string;
                requestId: string;
                card_info: CardInfoV1;
                /**
                 * Real Card Info
                 */
                card: Card;
            },
        ) => void,
    ): void;
}
