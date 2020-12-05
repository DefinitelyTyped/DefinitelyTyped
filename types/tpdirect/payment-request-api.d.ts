/// <reference path="common.d.ts" />

interface PaymentRequestData {
    supportedNetworks: AllowedNetworks[];
    supportedMethods: string[];
    options?: {
        requestPayerEmail: boolean;
        requestPayerName: boolean;
        requestPayerPhone: boolean;
        requestShipping: boolean;
        shippingType: 'shipping' | 'delivery' | 'pickup';
    };
    shippingOptions: Array<PaymentRequestAmount & {
        id: string;
        detail: string;
    }>;
    displayItems: PaymentRequestAmount[];
    total: PaymentRequestAmount;
}

interface PaymentRequestApi {
    /**
     * ```markdown
     * `true` support payment request api
     * `false` doesn't support payment request api
     * ```
     */
    checkAvailability(): boolean;

    setupPaymentRequest(paymentRequestData: PaymentRequestData, callback: (result: {
        /**
         * Does Browser support Payment Request API
         */
        browserSupportPaymentRequest: boolean;
        /**
         * Does this device have card to make payment
         */
        canMakePaymentWithActiveCard: boolean;
    }) => void): void;

    setupApplePay(applePaySetting: {
        merchantIdentifier: string;
        countryCode: string;
    }): void;

    getPrime(callback: (result: BaseResult & {
        prime_expiry_millis: number;
        total_amount: string;
        payer: {
            name: string;
            email: string;
            phone: string;
        }
        billingAddress: Address;
        shippingAddress: Address;
        shippingOption: string;
        methodName: string;
        requestId: string;
        card_info: CardInfoV2;
        /**
         * Real Card Info
         */
        card: Card
        merchant_reference_info: {
            affiliate_codes: string[];
        };
    }) => void): void;
}
