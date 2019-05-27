import * as dropin from "braintree-web-drop-in";

dropin.create({ authorization: "", container: "my-div" }, (error, myDropin) => {
    if (error) {
        return;
    }
    if (myDropin) {
        myDropin.clearSelectedPaymentMethod();
    }
});

(async () => {
    const myOptions: dropin.Options = {
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
    };
    const myDropin = await dropin.create(myOptions);

    myDropin.clearSelectedPaymentMethod();
    const myBool: boolean = myDropin.isPaymentMethodRequestable();

    myDropin.on("noPaymentMethodRequestable", () => {
        return;
    });
    myDropin.on("paymentMethodRequestable", ({ type, paymentMethodIsSelected }) => {
        const myType: "CreditCard" | "PayPalAccount" = type;
        const myBool: boolean = paymentMethodIsSelected;
    });
    myDropin.on("paymentOptionSelected", ({ paymentOption }) => {
        const myPaymentOption: "card" | "paypal" | "paypalCredit" = paymentOption;
    });

    myDropin.requestPaymentMethod((error, payload) => {
        if (error) {
            return;
        }
    });
    const myPayloadPromise = await myDropin.requestPaymentMethod();
    myDropin.teardown(error => {
        if (error) {
            return;
        }
    });
    const myTeardownPromise = await myDropin.teardown();
})();

function customFunction(options: dropin.Options) {
    return;
}
