/// <reference path="direct-pay.d.ts" />
/// <reference path="payment-request-api.d.ts" />
/// <reference path="line-pay.d.ts" />
/// <reference path="jko-pay.d.ts" />
/// <reference path="easy-wallet.d.ts" />
/// <reference path="google-pay.d.ts" />
/// <reference path="samsung-pay.d.ts" />

interface TPDirect {
    card: DirectPay;
    paymentRequestApi: PaymentRequestApi;
    linePay: LinePay;
    jkoPay: JkoPay;
    easyWallet: EasyWallet;
    googlePay: GooglePay;
    samsungPay: SamsungPay;

    setupSDK: (
        appId: number,
        appKey: string,
        environment: "sandbox" | "production",
    ) => void;
}
