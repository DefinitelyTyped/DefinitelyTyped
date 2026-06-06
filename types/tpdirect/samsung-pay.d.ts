/// <reference path="common.d.ts" />

interface SamsungPay {
    setup(setting: {
        country_code: string;
    }): void;

    setupPaymentRequest(paymentReqeuestData: {
        supportedNetworks: AllowedNetworks[];
        total: PaymentRequestAmount;
    }): void;

    setupSamsungPayButton(
        element: string,
        setting: {
            color: "black" | "white";
            type: "pay" | "buy";
            shape: "shape" | "rectangular";
        },
    ): void;

    getPrime(
        callback: (
            result: BaseResult & MerchantReferenceInfo & {
                card_info: CardInfoV1;
                card: Card;
                total_amount: string;
            },
        ) => void,
    ): void;
}
