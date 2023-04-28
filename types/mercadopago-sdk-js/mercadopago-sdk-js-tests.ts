import * as mp from "mercadopago-sdk-js";

// initiate MP library
const mpInstance = new window.MercadoPago("pk", {});

mpInstance.getIdentificationTypes();
mpInstance.getInstallments({ amount: "100", bin: "123456" });
mpInstance.getIssuers({ bin: "123456" });
mpInstance.getPaymentMethods({ bin: "123456" });
mpInstance.createCardToken(
  {
    cardholderName: "APRO",
    identificationType: "<BUYER_IDENTIFICATION_TYPE>",
    identificationNumber: "<BUYER_IDENTIFICATION_NUMBER>",
    cardExpirationMonth: "<CARD_EXPIRATION_MONTH>",
    cardExpirationYear: "<CARD_EXPIRATION_MONTH>",
    cardNumber: "<CARD_NUMBER>",
    securityCode: "<SECURITY_CODE>"
  }
);

const brickBuilder = mpInstance.bricks({})

brickBuilder.isInitialized();

brickBuilder.create('cardPayment', 'container', {
    initialization: {
        amount: 100
    },
    callbacks: {
        onSubmit: (formData, additionalData) => {
            return new Promise(() => {
                console.log(formData, additionalData)
            })
        }
    }
})

const cardForm = mpInstance.cardForm({
    amount: '100.21',
    autoMount: true,
    processingMode: 'aggregator',
    form: {
        id: 'form-checkout',
        cardholderName: {
            id: 'form-checkout__cardholderName',
            placeholder: 'Full name',
        },
        cardholderEmail: {
            id: 'form-checkout__cardholderEmail',
            placeholder: 'e-mail'
        },
        cardNumber: {
            id: 'form-checkout__cardNumber',
            placeholder: 'Card number',
        },
        securityCode: {
            id: 'form-checkout__CVV',
            placeholder: 'CVV',
        },
        installments: {
            id: 'form-checkout__installments',
            placeholder: 'Number of installments'
        },
        cardExpirationMonth: {
            id: 'form-checkout__expirationMonth',
            placeholder: 'MM'
        },
        cardExpirationYear: {
            id: 'form-checkout__expirationYear',
            placeholder: 'YYYY'
        },
        // cardExpirationDate: {
        //     id: 'form-checkout__expirationDate',
        //     placeholder: 'MM/YYYY'
        // },
        identificationType: {
            id: 'form-checkout__docType',
            placeholder: 'Document type'
        },
        identificationNumber: {
            id: 'form-checkout__docValue',
            placeholder: 'Document value'
        },
        issuer: {
            id: 'form-checkout__issuer',
            placeholder: 'Bank'
        }
    },
    callbacks: {
        onFormMounted: function (error) {
            if (error) return console.log('Callback to treat the error: mounting cardform ', error)
        },
        onFormUnmounted: function (error) {
            if (error) return console.log('Callback to treat the error: unmounting cardform ', error)
            console.log('unmounted')
        },
        onIdentificationTypesReceived: function (error, identificationTypes) {
            if (error) return console.log('Callback to treat the error: recieving doc type', error)
        },
        onPaymentMethodsReceived: function (error, paymentMethods) {
            if (error) return console.log('Callback to treat the error: recieving payment methods ', error)

            const securityCodePlaceholder = paymentMethods && paymentMethods[0].settings[0].security_code?.length === 3 ? '123' : '1234';
            cardForm.update('securityCode', {
                placeholder: securityCodePlaceholder,
            });
        },
        onIssuersReceived: function (error, issuers) {
            if (error) return console.log('Callback to treat the error: recieving emissors ', error)
        },
        onInstallmentsReceived: function (error, installments) {
            if (error) return console.log('Callback to treat the error: recieving payment installments ', error)
        },
        onCardTokenReceived: function (error, token) {
            if (error) return console.log('Callback to treat the error: recieving card token ', error)
        },
        onSubmit: function (event) {
            event.preventDefault();

            const {
                paymentMethodId: payment_method_id,
                issuerId: issuer_id,
                cardholderEmail: email,
                amount,
                token,
                installments,
                identificationNumber,
                identificationType
            } = cardForm.getCardFormData();

            console.log(cardForm.getCardFormData())

            // fetch('/endpoint', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         token,
            //         issuer_id,
            //         payment_method_id,
            //         transaction_amount: Number(amount),
            //         installments: Number(installments),
            //         description: 'product description',
            //         payer: {
            //             email,
            //             identification: {
            //             type: identificationType,
            //             number: identificationNumber
            //             }
            //         }
            //     })
            // })
        },
        onFetching: function (resource) {
            console.log('fetching... ', resource)
            const progressBar = document.querySelector('.progress-bar')
            progressBar?.removeAttribute('value')

            return () => {
                progressBar?.setAttribute('value', '0')
            }
        },
        onError: function (error, event) {
            console.log(event, error);
        },
        onValidityChange: function (error, field) {
            if (error) return error.forEach(e => console.log(`${field}: message = ${e.message}; code = ${e?.code}`));
            console.log(`${field} is valid`);
        },
        onReady: function() {
            console.log("Card Form ready");
        },
        onBinChange: function (bin) {
            console.log('binChange', bin);
        }
    }
})

const fieldInstance = mpInstance.fields.create("cardNumber", {});
fieldInstance.mount("containerId");
fieldInstance.update({});
fieldInstance.on('validityChange', (args) => {})
mpInstance.fields.createCardToken({}, undefined)
fieldInstance.unmount()

export { mpInstance };
