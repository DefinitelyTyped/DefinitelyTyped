import { PaymentMethodRequestablePayload, PaymentOptionSelectedPayload } from "braintree-web-drop-in";

braintree.dropin.create({ authorization: "", container: "my-div" }, (error, myDropin) => {
    if (error) {
        return;
    }
    if (myDropin) {
        myDropin.clearSelectedPaymentMethod();
    }
});

(async () => {
    const myDropin = await braintree.dropin.create({
        authorization: "",
        container: "my-div",
        locale: "en-US",
        translations: {},
        paymentOptionPriority: ["card", "paypal", "paypalCredit", "venmo", "applePay"],
        card: {
            cardholderName: {
                required: false
            },
            overrides: {
                fields: {},
                styles: {}
            },
            clearFieldsAfterTokenization: false,
            vault: {
                allowVaultCardOverride: false,
                vaultCard: false
            }
        },
        paypal: {
            flow: "checkout",
            amount: 1,
            currency: "USD",
            buttonStyle: "red",
            commit: false
        },
        paypalCredit: undefined,
        venmo: {
            allowNewBrowserTab: false
        },
        applePay: {
            buttonStyle: "red",
            displayName: "name",
            applePaySessionVersion: 1,
            paymentRequest: {}
        },
        googlePay: {
            merchantId: "",
            googlePayVersion: "",
            transactionInfo: {},
            button: {}
        },
        dataCollector: {
            kount: false,
            paypal: false
        },
        threeDSecure: {
            amount: "1"
        },
        vaultManager: false,
        preselectVaultedPaymentMethod: false
    });

    myDropin.clearSelectedPaymentMethod();
    const myBool: boolean = myDropin.isPaymentMethodRequestable();

    function onNoPaymentMethodRequestable() {
        return;
    }
    function onPaymentMethodRequestable({ type, paymentMethodIsSelected }: PaymentMethodRequestablePayload) {
        const myType: "CreditCard" | "PayPalAccount" = type;
        const myBool: boolean = paymentMethodIsSelected;
    }
    function onPaymentOptionSelected({ paymentOption }: PaymentOptionSelectedPayload) {
        const myPaymentOption: "card" | "paypal" | "paypalCredit" = paymentOption;
    }

    myDropin.on("noPaymentMethodRequestable", onNoPaymentMethodRequestable);
    myDropin.on('paymentMethodRequestable', onPaymentMethodRequestable);
    myDropin.on("paymentOptionSelected", onPaymentOptionSelected);

    myDropin.off("noPaymentMethodRequestable", onNoPaymentMethodRequestable);
    myDropin.off("paymentMethodRequestable", onPaymentMethodRequestable);
    myDropin.off("paymentOptionSelected", onPaymentOptionSelected);

    myDropin.requestPaymentMethod((error, payload) => {
        if (error) {
            return;
        }
    });

    const myPayload = await myDropin.requestPaymentMethod();
    const details: object = myPayload.details;
    const deviceData: string | null = myPayload.deviceData;
    const nonce: string = myPayload.nonce;
    const type: "CreditCard" | "PayPalAccount" | "VenmoAccount" | "AndroidPayCard" | "ApplePayCard" = myPayload.type;
    const countryOfIssuance: string = myPayload.binData.countryOfIssuance;

    myDropin.teardown(error => {
        if (error) {
            return;
        }
    });
    await myDropin.teardown();
})();
