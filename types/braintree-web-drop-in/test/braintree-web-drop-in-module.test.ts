import * as dropin from 'braintree-web-drop-in';

dropin.create({ authorization: '', container: 'my-div' }, (error, myDropin) => {
    if (error) {
        return;
    }
    if (myDropin) {
        myDropin.clearSelectedPaymentMethod();
    }
});

(async () => {
    const myOptions: dropin.Options = {
        authorization: '',
        container: 'my-div',
        locale: 'en-US',
        translations: {},
        paymentOptionPriority: ['card', 'paypal', 'paypalCredit', 'venmo', 'applePay'],
        card: {
            cardholderName: {
                required: false,
            },
            overrides: {
                fields: {},
                styles: {},
            },
            clearFieldsAfterTokenization: false,
            vault: {
                allowVaultCardOverride: false,
                vaultCard: false,
            },
        },
        paypal: {
            flow: 'checkout',
            amount: 1,
            currency: 'USD',
            buttonStyle: {},
            commit: false,
        },
        paypalCredit: undefined,
        venmo: {
            allowNewBrowserTab: false,
        },
        applePay: {
            buttonStyle: 'white-outline',
            displayName: 'name',
            applePaySessionVersion: 1,
            paymentRequest: {
                countryCode: 'US',
                currencyCode: 'USD',
                supportedNetworks: ['visa', 'masterCard'],
                merchantCapabilities: ['supports3DS'],
                total: { label: 'Your Label', amount: '10.00' },
            },
        },
        googlePay: {
            merchantId: '',
            googlePayVersion: '',
            transactionInfo: {
                currencyCode: 'USD',
                totalPriceStatus: 'FINAL',
                totalPrice: '100.00',
            },
            button: {
                onClick: event => {},
            },
        },
        dataCollector: {
            kount: false,
        },
        threeDSecure: {
            amount: '1',
        },
        vaultManager: false,
        preselectVaultedPaymentMethod: false,
    };
    const myDropin = await dropin.create(myOptions);

    myDropin.clearSelectedPaymentMethod();
    const myBool: boolean = myDropin.isPaymentMethodRequestable();

    function onNoPaymentMethodRequestable() {
        return;
    }
    function onPaymentMethodRequestable({ type, paymentMethodIsSelected }: dropin.PaymentMethodRequestablePayload) {
        const myType: 'CreditCard' | 'PayPalAccount' = type;
        const myBool: boolean = paymentMethodIsSelected;
    }
    function onPaymentOptionSelected({ paymentOption }: dropin.PaymentOptionSelectedPayload) {
        const myPaymentOption: 'card' | 'paypal' | 'paypalCredit' = paymentOption;
    }

    myDropin.on('noPaymentMethodRequestable', onNoPaymentMethodRequestable);
    myDropin.on('paymentMethodRequestable', onPaymentMethodRequestable);
    myDropin.on('paymentOptionSelected', onPaymentOptionSelected);

    myDropin.off('noPaymentMethodRequestable', onNoPaymentMethodRequestable);
    myDropin.off('paymentMethodRequestable', onPaymentMethodRequestable);
    myDropin.off('paymentOptionSelected', onPaymentOptionSelected);

    myDropin.requestPaymentMethod((error, payload) => {
        if (error) {
            return;
        }
    });

    const myPayload = await myDropin.requestPaymentMethod();
    const type: 'AndroidPayCard' | 'ApplePayCard' | 'CreditCard' | 'PayPalAccount' | 'VenmoAccount' = myPayload.type;
    switch (myPayload.type) {
        case 'AndroidPayCard':
        case 'ApplePayCard':
        case 'CreditCard':
            const countryOfIssuance: string = myPayload.binData.countryOfIssuance;
    }
    const details: object = myPayload.details;
    const deviceData: string | undefined = myPayload.deviceData;
    const nonce: string = myPayload.nonce;

    myDropin.teardown(error => {
        if (error) {
            return;
        }
    });
    await myDropin.teardown();
})();

function customFunction(options: dropin.Options) {
    return;
}
