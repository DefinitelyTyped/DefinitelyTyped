const allowedPaymentMethods = new Array<google.payments.api.AllowedPaymentMethod>('CARD', 'TOKENIZED_CARD');

const allowedCardNetworks = new Array<google.payments.api.AllowedCardNetwork>('AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA');

const tokenizationParameters: google.payments.api.PaymentMethodTokenizationParameters = {
    tokenizationType: 'PAYMENT_GATEWAY',
    parameters: {
      gateway: 'example',
      gatewayMerchantId: 'abc123'
    }
};

const getGooglePaymentsClient = (env?: google.payments.api.EnvironmentType) => new google.payments.api.PaymentsClient({environment: env});

function onGooglePayLoaded() {
    const client = getGooglePaymentsClient();

    client.isReadyToPay({allowedPaymentMethods}).then(response => {
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
        buttonType: 'short',
    };
    const client = getGooglePaymentsClient();
    const button = client.createButton(buttonOptions);
    document.appendChild(document.createElement('div').appendChild(button));
}

function getGooglePaymentDataConfiguration(): google.payments.api.PaymentDataRequest {
    return {
        merchantId: '01234567890123456789',
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '123.45',
            currencyCode: 'USD'
        },
        paymentMethodTokenizationParameters: tokenizationParameters,
        allowedPaymentMethods,
        cardRequirements: {
            allowedCardNetworks,
            billingAddressRequired: true,
            billingAddressFormat: 'FULL'
        },
        phoneNumberRequired: false,
        shippingAddressRequired: true
    };
}

function prefetchGooglePaymentData() {
    const client = getGooglePaymentsClient();
    client.prefetchPaymentData(getGooglePaymentDataConfiguration());
}

function onGooglePaymentButtonClick() {
    const request = getGooglePaymentDataConfiguration();
    const client = getGooglePaymentsClient();

    client.loadPaymentData(request)
        .then(data => console.log(data))
        .catch(err => console.error(err));
}
