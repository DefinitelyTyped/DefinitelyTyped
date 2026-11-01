const allowedCardNetworks = new Array<google.payments.api.CardNetwork>(
    "AMEX",
    "DISCOVER",
    "JCB",
    "MASTERCARD",
    "VISA",
    "INTERAC",
);

const cardFundingSource = new Array<google.payments.api.CardFundingSource>(
    "UNKNOWN",
    "CREDIT",
    "DEBIT",
    "PREPAID",
);

const allowedPaymentMethods = new Array<google.payments.api.PaymentMethodSpecification>({
    type: "CARD",
    parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks,
        allowedIssuerCountryCodes: ["US", "CA"],
        billingAddressRequired: true,
        billingAddressParameters: {
            format: "MIN",
        },
    },
    tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: {
            gateway: "example",
            gatewayMerchantId: "abc123",
        },
    },
});

const checkoutOptions = new Array<google.payments.api.CheckoutOption>(
    "DEFAULT",
    "COMPLETE_IMMEDIATE_PURCHASE",
    "CONTINUE_TO_REVIEW",
);

// @ts-expect-error
allowedPaymentMethods[0].tokenizationSpecification = {
    type: "DIRECT",
    parameters: {},
};

allowedPaymentMethods[0].tokenizationSpecification = {
    type: "DIRECT",
    parameters: {
        protocolVersion: "ECv2",
        publicKey: "BOdoXP1aiNp.....kh3JUhiSZKHYF2Y=",
    },
};

const shippingAddressParametersEmptyObjectIsValid: google.payments.api.ShippingAddressParameters = {};

const getGooglePaymentsClient = (env?: google.payments.api.Environment) => {
    return new google.payments.api.PaymentsClient({
        environment: env,
        nonce: "abc123def456",
        paymentDataCallbacks: {
            onPaymentAuthorized: (paymentData) => ({ transactionState: "SUCCESS" }),
            onPaymentDataChanged: (paymentData) => {
                const validCodes = ["abc"];
                if (paymentData.callbackTrigger === "OFFER") {
                    if (
                        paymentData.offerData
                        && paymentData.offerData.redemptionCodes
                            .every(code => validCodes.indexOf(code) === -1)
                    ) {
                        return {
                            newOfferInfo: {
                                offers: paymentData.offerData.redemptionCodes
                                    .map(code => ({ redemptionCode: code, description: `Save with ${code}` })),
                            },
                        };
                    }
                    return {
                        error: {
                            reason: "OFFER_INVALID",
                            message: "That is not a valid promo code.",
                            intent: "OFFER",
                        },
                    };
                }
                return {};
            },
        },
    });
};

function onGooglePayLoaded() {
    const client = getGooglePaymentsClient();

    client.isReadyToPay({
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
            type: "CARD",
            parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks,
            },
        }],
    }).then(response => {
        if (response.result) {
            addGooglePayButton();
            prefetchGooglePaymentData();
        }
    }).catch(err => {
        console.error(err);
    });
}

function addGooglePayButton() {
    const buttonOptions: google.payments.api.ButtonOptions = {
        onClick: onGooglePaymentButtonClick,
        buttonColor: "black",
        allowedPaymentMethods: [{
            type: "CARD",
            parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks,
                cvcRequired: false,
            },
        }],
    };

    // @ts-expect-error
    buttonOptions.buttonType = "xyz";
    buttonOptions.buttonType = "book";
    buttonOptions.buttonType = "buy";
    buttonOptions.buttonType = "checkout";
    buttonOptions.buttonType = "donate";
    buttonOptions.buttonType = "order";
    buttonOptions.buttonType = "pay";
    buttonOptions.buttonType = "plain";
    buttonOptions.buttonType = "subscribe";
    buttonOptions.buttonType = "long";
    buttonOptions.buttonType = "short";

    buttonOptions.buttonRadius = -1;
    buttonOptions.buttonRadius = 0;
    buttonOptions.buttonRadius = 10;
    buttonOptions.buttonRadius = 20;
    buttonOptions.buttonRadius = 100;

    buttonOptions.buttonSizeMode = undefined;
    buttonOptions.buttonSizeMode = "fill";
    buttonOptions.buttonSizeMode = "static";
    // @ts-expect-error
    buttonOptions.buttonSizeMode = "unknown";

    buttonOptions.buttonRootNode = undefined;
    buttonOptions.buttonRootNode = document;

    const node = document.createElement("div").getRootNode() as ShadowRoot;
    buttonOptions.buttonRootNode = node;

    // @ts-expect-error
    buttonOptions.buttonRootNode = document.createElement("div");

    buttonOptions.buttonLocale = "";
    buttonOptions.buttonLocale = undefined;
    // @ts-expect-error
    buttonOptions.buttonLocale = {};
    buttonOptions.buttonLocale = "en";
    buttonOptions.buttonLocale = "qw";
    buttonOptions.buttonLocale = "zh";

    buttonOptions.buttonBorderType = "default_border";
    buttonOptions.buttonBorderType = "no_border";

    const client = getGooglePaymentsClient();
    const button = client.createButton(buttonOptions);
    document.appendChild(document.createElement("div").appendChild(button));
}

function getGooglePaymentDataConfiguration(): google.payments.api.PaymentDataRequest {
    return {
        apiVersion: 2,
        apiVersionMinor: 0,
        merchantInfo: {
            merchantId: "01234567890123456789",
            softwareInfo: {
                id: "my.softwareInfo.test",
                version: "1.0.0",
            },
        },
        transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPrice: "123.45",
            currencyCode: "USD",
            countryCode: "US",
            transactionId: "0123456789",
            displayItems: [{
                label: "Subtotal",
                type: "SUBTOTAL",
                price: "11.00",
            }, {
                label: "Shipping",
                type: "LINE_ITEM",
                price: "0",
                status: "PENDING",
            }],
            totalPriceLabel: "Total",
            checkoutOption: "COMPLETE_IMMEDIATE_PURCHASE",
        },
        allowedPaymentMethods,
        shippingAddressRequired: true,
        shippingAddressParameters: {
            phoneNumberRequired: true,
            format: "FULL-ISO3166",
        },
        callbackIntents: ["OFFER", "PAYMENT_AUTHORIZATION", "PAYMENT_METHOD"],
    };
}

function getGoogleRecurringPaymentDataConfiguration(): google.payments.api.PaymentDataRequest {
    const recurringTransactionInfo: google.payments.api.RecurringTransactionInfo = {
        currencyCode: "USD",
        countryCode: "US",
        immediateTotalPrice: "0.00",
        managementUrl: "https://example.com/account",
        immediateDisplayItems: [{
            label: "Due today",
            type: "LINE_ITEM",
            price: "0.00",
            status: "FINAL",
        }],
        recurrenceItems: [{
            label: "Monthly subscription",
            priceStatus: "FINAL",
            recurrencePeriod: "MONTH",
            recurrencePeriodCount: 1,
            price: "9.99",
        }],
        introductoryPeriodInfo: {
            introductoryPeriodEndDateTime: "2026-09-30T23:59:59Z",
            label: "Free trial",
            totalPrice: "0.00",
        },
    };

    return {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods,
        merchantInfo: {
            merchantId: "01234567890123456789",
            merchantName: "Example Merchant",
        },
        recurringTransactionInfo,
    };
}

function getGoogleDeferredPaymentDataConfiguration(): google.payments.api.PaymentDataRequest {
    const deferredTransactionInfo: google.payments.api.DeferredTransactionInfo = {
        currencyCode: "USD",
        countryCode: "US",
        immediateTotalPrice: "0.00",
        managementUrl: "https://example.com/bookings",
        immediateDisplayItems: [{
            label: "Due today",
            type: "LINE_ITEM",
            price: "0.00",
            status: "FINAL",
        }],
        billingDateTime: "2026-09-30T23:59:59Z",
        priceStatus: "FINAL",
        label: "Pay later",
        price: "49.99",
    };

    return {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods,
        merchantInfo: {
            merchantId: "01234567890123456789",
            merchantName: "Example Merchant",
        },
        deferredTransactionInfo,
    };
}

function getGoogleAutomaticReloadPaymentDataConfiguration(): google.payments.api.PaymentDataRequest {
    const automaticReloadTransactionInfo: google.payments.api.AutomaticReloadTransactionInfo = {
        currencyCode: "USD",
        countryCode: "US",
        immediateTotalPrice: "10.00",
        managementUrl: "https://example.com/balance",
        immediateDisplayItems: [{
            label: "Reload today",
            type: "LINE_ITEM",
            price: "10.00",
            status: "FINAL",
        }],
        minimumBalanceAmount: "5.00",
        reloadAmount: "25.00",
        label: "Transit card reload",
    };

    return {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods,
        merchantInfo: {
            merchantId: "01234567890123456789",
            merchantName: "Example Merchant",
        },
        automaticReloadTransactionInfo,
    };
}

function prefetchGooglePaymentData() {
    const client = getGooglePaymentsClient();
    client.prefetchPaymentData(getGooglePaymentDataConfiguration());
}

function onGooglePaymentButtonClick() {
    const request = getGooglePaymentDataConfiguration();
    const client = getGooglePaymentsClient();

    request.callbackIntents = ["PAYMENT_AUTHORIZATION"];
    request.callbackIntents = ["OFFER"];
    // @ts-expect-error
    request.callbackIntents = ["OFFER_INFO"];

    client.loadPaymentData(request)
        .then(data => console.log(data))
        .catch(err => console.error(err));
}
