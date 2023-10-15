import { GooglePayPaymentAuthorizationResult, GooglePayPaymentData } from "@recurly/recurly-js";

export default function googlePay() {
    window.recurly.GooglePay({
        currency: "USD",
        country: "US",
        total: "1.00",
        googleMerchantId: "RECURLY",
        googleBusinessName: "RECURLY",
        gatewayCode: "abc123",
        requireBillingAddress: true,
    });

    window.recurly.GooglePay({
        currency: "USD",
        country: "US",
        total: "1.00",
        requireBillingAddress: true,
        paymentDataRequest: {
            emailRequired: true,
            merchantInfo: {
                merchantId: "RECURLY",
                merchantName: "RECURLY",
            },
            transactionInfo: {
                displayItems: [
                    { label: "Subtotal", type: "SUBTOTAL", price: "1.00" },
                ],
            },
        },
        buttonOptions: {
            buttonColor: "black",
        },
        callbacks: {
            onPaymentAuthorized: (
                paymentData: GooglePayPaymentData,
            ): Promise<GooglePayPaymentAuthorizationResult> | void => {
                if (paymentData.email === "test@example.com") {
                    return Promise.reject({
                        error: {
                            intent: "PAYMENT_AUTHORIZATION",
                            message: "Insufficient funds",
                            reason: "PAYMENT_DATA_INVALID",
                        },
                    });
                }
            },
        },
    });
}
