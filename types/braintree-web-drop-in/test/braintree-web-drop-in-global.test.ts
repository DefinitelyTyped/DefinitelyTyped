import {
    ChangeActiveViewPayload,
    PaymentMethodRequestablePayload,
    PaymentOptionSelectedPayload,
} from 'braintree-web-drop-in';

braintree.dropin.create({ authorization: '', container: 'my-div' }, (error, myDropin) => {
    if (error) {
        return;
    }
    if (myDropin) {
        myDropin.clearSelectedPaymentMethod();
    }
});

(async () => {
    const myDropin = await braintree.dropin.create({
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
            googlePayVersion: 1,
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
    });

    myDropin.clearSelectedPaymentMethod();
    const myBool: boolean = myDropin.isPaymentMethodRequestable();

    function onNoPaymentMethodRequestable() {
        return;
    }
    function onPaymentMethodRequestable({ type, paymentMethodIsSelected }: PaymentMethodRequestablePayload) {
        const myType: 'CreditCard' | 'PayPalAccount' = type;
        const myBool: boolean = paymentMethodIsSelected;
    }
    function onPaymentOptionSelected({ paymentOption }: PaymentOptionSelectedPayload) {
        const myPaymentOption: 'card' | 'paypal' | 'paypalCredit' = paymentOption;
    }

    function onChangeActiveView({ previousViewId, newViewId }: ChangeActiveViewPayload) {
        const myPreviousView:
            | 'card'
            | 'paypal'
            | 'paypalCredit'
            | 'venmo'
            | 'googlePay'
            | 'applePay'
            | 'methods'
            | 'options'
            | 'delete-confirmation' = previousViewId;
        const myNewView:
            | 'card'
            | 'paypal'
            | 'paypalCredit'
            | 'venmo'
            | 'googlePay'
            | 'applePay'
            | 'methods'
            | 'options'
            | 'delete-confirmation' = newViewId;
    }

    myDropin.on('noPaymentMethodRequestable', onNoPaymentMethodRequestable);
    myDropin.on('paymentMethodRequestable', onPaymentMethodRequestable);
    myDropin.on('paymentOptionSelected', onPaymentOptionSelected);
    myDropin.on('changeActiveView', onChangeActiveView);

    myDropin.off('noPaymentMethodRequestable', onNoPaymentMethodRequestable);
    myDropin.off('paymentMethodRequestable', onPaymentMethodRequestable);
    myDropin.off('paymentOptionSelected', onPaymentOptionSelected);
    myDropin.off('changeActiveView', onChangeActiveView);

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
