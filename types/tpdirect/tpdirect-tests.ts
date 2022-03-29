/**
 * Test the startup function
 */

// $ExpectType void
TPDirect.setupSDK(1, "appKey", "sandbox");
// $ExpectType void
TPDirect.setupSDK(1, "appKey", "production");

/**
 * Test DirectPay
 */

// $ExpectType void
TPDirect.card.getPrime((result) => {
    /**
     * Only test different field with other payment response
     */
    result.clientip; // $ExpectType Pick<BaseResult, "client_ip">
    result.card.countrycode; // $ExpectType string
    result.card.lastfour; // $ExpectType string
});

// $ExpectType UpdateResult
TPDirect.card.getTappayFieldsStatus();

// $ExpectType void
TPDirect.card.onUpdate((update) => {
    update.cardType; // $ExpectType "mastercard" | "visa" | "jcb" | "amex" | "unionpay" | "unknown"
    update.hasError; // $ExpectType boolean
    update.status.ccv; // $ExpectType 0 | 1 | 2 | 3 || 0 | 2 | 1 | 3
    update.status.number; // $ExpectType 0 | 1 | 2 | 3 || 0 | 2 | 1 | 3
    update.status.expiry; // $ExpectType 0 | 1 | 2 | 3 || 0 | 2 | 1 | 3
});

// $ExpectType void
TPDirect.card.setup({
    number: {
        element: "#body",
        placeholder: "**** **** **** ****"
    },
    ccv: {
        element: "#body",
        placeholder: "***"
    },
    expirationDate: {
        element: "#body",
        placeholder: "MM / YYYY"
    }
});

// $ExpectType void
TPDirect.card.setup({
    number: {
        element: "#body",
        placeholder: "**** **** **** ****"
    },
    ccv: {
        element: "#body",
        placeholder: "***"
    },
    expirationDate: {
        element: "#body",
        placeholder: "MM / YYYY"
    },
}, {
    input: {
        color: "red"
    }
});

/**
 * Test Apple Pay
 */

// $ExpectType boolean
TPDirect.paymentRequestApi.checkAvailability();

// $ExpectType void
TPDirect.paymentRequestApi.setupPaymentRequest({
    supportedNetworks: ['AMEX', "JCB", "MASTERCARD", "VISA"],
    supportedMethods: ["apple_pay"],
    displayItems: [{
        amount: {
            currency: "TWD",
            value: "1.00"
        },
        label: "hi"
    }],
    total: {
        amount: {
            currency: "TWD",
            value: '1.00'
        },
        label: "total"
    }
}, (result) => {
    result.browserSupportPaymentRequest; // $ExpectType boolean
    result.canMakePaymentWithActiveCard; // $ExpectType boolean
});

// $ExpectType void
TPDirect.paymentRequestApi.setupApplePay({
    countryCode: "TW",
    merchantIdentifier: "merchantid"
});

TPDirect.paymentRequestApi.getPrime((result) => {
    /**
     * Only test different field with other payment response
     */
    result.client_ip; // $ExpectType string
    result.card_info.countrycode; // $ExpectType string
    result.card_info.lastfour; // $ExpectType string
    result.card.lastfour; // $ExpectType string
});

/**
 * Test Google Pay
 */

// $ExpectType void
TPDirect.googlePay.getPrime((error, prime, result) => {
    error.originalError; // // $ExpectType string | Error
    prime; // $ExpectType Pick<BaseResult, "prime">

    /**
     * Only test different field with other payment response
     */
    result.client_ip; // $ExpectType string
    result.card_info.countrycode; // $ExpectType string
    result.card_info.lastfour; // $ExpectType string
});

// $ExpectType void
TPDirect.googlePay.setupGooglePay({
    allowPrepaidCards: true,
    allowedCardAuthMethods: ["CRYPTOGRAM_3DS", "PAN_ONLY"],
    allowedCountryCodes: ["TW"],
    billingAddressFormat: "FULL",
    googleMerchantId: "test",
    merchantName: "merchant name"
});

// $ExpectType void
TPDirect.googlePay.setupTransactionPrice({
    currency: "TWD",
    price: "1.00"
});

// $ExpectType void
TPDirect.googlePay.setupGooglePayButton({
    color: "black",
    el: "#button",
    type: "long",
    getPrimeCallback: (error, prime, result) => {
        error.originalError; // // $ExpectType string | Error
        prime; // $ExpectType Pick<BaseResult, "prime">
        /**
         * Only test different field with other payment response
         */
        result.client_ip; // $ExpectType string
        result.card_info.countrycode; // $ExpectType string
        result.card_info.lastfour; // $ExpectType string
    }
});

// $ExpectType void
TPDirect.googlePay.setupPaymentRequest({
    allowedNetworks: ["AMEX"],
    currency: "TWD",
    price: "1.00"
});

// $ExpectType void
TPDirect.googlePay.getPrime((error, prime, result) => {
    error.originalError; // // $ExpectType string | Error
    prime; // $ExpectType Pick<BaseResult, "prime">
    /**
     * Only test different field with other payment response
     */
    result.client_ip; // $ExpectType string
    result.card_info.countrycode; // $ExpectType string
    result.card_info.lastfour; // $ExpectType string
});

/**
 * Test Samsung Pay
 */

// $ExpectType void
TPDirect.samsungPay.getPrime((result) => {
    result.client_ip; // $ExpectType string
    result.msg; // $ExpectType string
    result.prime; // $ExpectType string
    result.status; // $ExpectType number
    result.card.lastfour; // $ExpectType string
    /**
     * Only test different field with other payment response
     */
    result.client_ip; // $ExpectType string
    result.card_info.countrycode; // $ExpectType string
    result.card_info.lastfour; // $ExpectType string
});

// $ExpectType void
TPDirect.samsungPay.setup({
    country_code: "tw"
});

// $ExpectType void
TPDirect.samsungPay.setupPaymentRequest({
    supportedNetworks: ["AMEX"],
    total: {
        label: "test",
        amount: {
            currency: "TWD",
            value: "1.00"
        }
    }
});

// $ExpectType void
TPDirect.samsungPay.setupSamsungPayButton(
    "#button", {
        color: "black",
        shape: "rectangular",
        type: "buy"
    }
);

/**
 * Test LINE Pay
 * LINE Pay doesn't have card_info fields
 */

// $ExpectType void
TPDirect.linePay.getPrime((result) => {
    result.client_ip; // $ExpectType string
    result.msg; // $ExpectType string
    result.prime; // $ExpectType string
    result.status; // $ExpectType number
    result.cs_key; // $ExpectType string
});

/**
 * Test JKOPay
 * JKOPay doesn't have card_info fields
 */

// $ExpectType void
TPDirect.jkoPay.getPrime((result) => {
    result.client_ip; // $ExpectType string
    result.msg; // $ExpectType string
    result.prime; // $ExpectType string
    result.status; // $ExpectType number
});

/**
 * Test EasyWallet
 * EasyWallet doesn't have card_info fields
 */

// $ExpectType void
TPDirect.easyWallet.getPrime((result) => {
    result.client_ip; // $ExpectType string
    result.msg; // $ExpectType string
    result.prime; // $ExpectType string
    result.status; // $ExpectType number
});
