/// <reference path="common.d.ts" />

interface SamsungPay {
    setup(setting: {
        country_code: string;
    }): void;

    setupPaymentRequest(paymentReqeuestData: {
        supportedNetworks: AllowedNetworks[];
        total: PaymentRequestAmount
    }): void;

    setupSamsungPayButton(
        element: string,
        setting: {
            color: "black" | "white";
            type: "pay" | "buy";
            shape: "shape" | "rectangular";
        }
    ): void;

    getPrime(callback: (
        result: BaseResult & {
            card_info: CardInfoV2;
            card: Card;
            total_amount: string;
            merchant_reference_info: {
                affiliate_codes: string[];
            };
        }
    ) => void): void;
}
