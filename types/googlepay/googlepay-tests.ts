const allowedCardNetworks = new Array<google.payments.api.CardNetwork>(
    'AMEX',
    'DISCOVER',
    'JCB',
    'MASTERCARD',
    'VISA',
    'INTERAC'
);

const allowedPaymentMethods = new Array<google.payments.api.PaymentMethodSpecification>({
    type: 'CARD',
    parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks,
        billingAddressRequired: true,
        billingAddressParameters: {
            format: 'MIN'
        }
    },
    tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
            gateway: 'example',
            gatewayMerchantId: 'abc123'
        }
    }
});

// @ts-expect-error
allowedPaymentMethods[0].tokenizationSpecification = {
    type: 'DIRECT',
    parameters: {
    }
};

allowedPaymentMethods[0].tokenizationSpecification = {
    type: 'DIRECT',
    parameters: {
        protocolVersion: 'ECv2',
        publicKey: 'BOdoXP1aiNp.....kh3JUhiSZKHYF2Y=',
    }
};

const getGooglePaymentsClient = (env?: google.payments.api.Environment) => {
    return new google.payments.api.PaymentsClient({
        environment: env,
        paymentDataCallbacks: {
            onPaymentAuthorized: (paymentData) => ({ transactionState: 'SUCCESS' }),
            onPaymentDataChanged: (paymentData) => {
                const validCodes = ['abc'];
                if (paymentData.callbackTrigger === 'OFFER') {
                    if (paymentData.offerData
                        && paymentData.offerData.redemptionCodes
                            .every(code => validCodes.indexOf(code) === -1)) {
                        return {
                            newOfferInfo: {
                                offers: paymentData.offerData.redemptionCodes
                                    .map(code => ({redemptionCode: code, description: `Save with ${code}`}))
                            }
                        };
                    }
                    return {
                        error: {
                            reason: 'OFFER_INVALID',
                            message: 'That is not a valid promo code.',
                            intent: 'OFFER'
                        }
                    };
                }
                return {};
            }
        }
    });
};

function onGooglePayLoaded() {
    const client = getGooglePaymentsClient();

    client.isReadyToPay({
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
            type: 'CARD',
            parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks,
            },
        }]
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
        buttonColor: 'black',
        allowedPaymentMethods: [{
            type: 'CARD',
            parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks,
            },
        }]
    };

    // @ts-expect-error
    buttonOptions.buttonType = 'xyz';
    buttonOptions.buttonType = 'book';
    buttonOptions.buttonType = 'buy';
    buttonOptions.buttonType = 'checkout';
    buttonOptions.buttonType = 'donate';
    buttonOptions.buttonType = 'order';
    buttonOptions.buttonType = 'pay';
    buttonOptions.buttonType = 'plain';
    buttonOptions.buttonType = 'subscribe';
    buttonOptions.buttonType = 'long';
    buttonOptions.buttonType = 'short';

    buttonOptions.buttonSizeMode = undefined;
    buttonOptions.buttonSizeMode = 'fill';
    buttonOptions.buttonSizeMode = 'static';
    // @ts-expect-error
    buttonOptions.buttonSizeMode = 'unknown';

    buttonOptions.buttonRootNode = undefined;
    buttonOptions.buttonRootNode = document;

    const node = document.createElement('div').getRootNode() as ShadowRoot;
    buttonOptions.buttonRootNode = node;

    // @ts-expect-error
    buttonOptions.buttonRootNode = document.createElement('div');

    buttonOptions.buttonLocale = '';
    buttonOptions.buttonLocale = undefined;
    // @ts-expect-error
    buttonOptions.buttonLocale = {};
    buttonOptions.buttonLocale = 'en';
    buttonOptions.buttonLocale = 'qw';
    buttonOptions.buttonLocale = 'zh';

    const client = getGooglePaymentsClient();
    const button = client.createButton(buttonOptions);
    document.appendChild(document.createElement('div').appendChild(button));
}

function getGooglePaymentDataConfiguration(): google.payments.api.PaymentDataRequest {
    return {
        apiVersion: 2,
        apiVersionMinor: 0,
        merchantInfo: {
            merchantId: '01234567890123456789',
            softwareInfo: {
                id: 'my.softwareInfo.test',
                version: '1.0.0'
            }
        },
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '123.45',
            currencyCode: 'USD',
            countryCode: 'US',
            transactionId: '0123456789',
            displayItems: [{
                label: 'Subtotal',
                type: 'SUBTOTAL',
                price: '11.00'
            }, {
                label: 'Shipping',
                type: 'LINE_ITEM',
                price: '0',
                status: 'PENDING'
            }],
            totalPriceLabel: 'Total',
            checkoutOption: 'COMPLETE_IMMEDIATE_PURCHASE'
        },
        allowedPaymentMethods,
        shippingAddressRequired: true,
        callbackIntents: ['OFFER', 'PAYMENT_AUTHORIZATION', 'PAYMENT_METHOD']
    };
}

function prefetchGooglePaymentData() {
    const client = getGooglePaymentsClient();
    client.prefetchPaymentData(getGooglePaymentDataConfiguration());
}

function onGooglePaymentButtonClick() {
    const request = getGooglePaymentDataConfiguration();
    const client = getGooglePaymentsClient();

    request.callbackIntents = ['PAYMENT_AUTHORIZATION'];
    request.callbackIntents = ['OFFER'];
    // @ts-expect-error
    request.callbackIntents = ['OFFER_INFO'];

    client.loadPaymentData(request)
        .then(data => console.log(data))
        .catch(err => console.error(err));
}
