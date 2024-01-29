// initiate MP library
const mpInstance = new MercadoPago("pk", {});

mpInstance.getIdentificationTypes();
mpInstance.getInstallments({ amount: "100", bin: "123456" });
mpInstance.getIssuers({ bin: "123456" });
mpInstance.getPaymentMethods({ bin: "123456" });
mpInstance.createCardToken({
    cardholderName: "APRO",
    identificationType: "<BUYER_IDENTIFICATION_TYPE>",
    identificationNumber: "<BUYER_IDENTIFICATION_NUMBER>",
    cardExpirationMonth: "<CARD_EXPIRATION_MONTH>",
    cardExpirationYear: "<CARD_EXPIRATION_MONTH>",
    cardNumber: "<CARD_NUMBER>",
    securityCode: "<SECURITY_CODE>",
});

const brickBuilder = mpInstance.bricks({});

brickBuilder.isInitialized();

(async () => {
    const controller = await brickBuilder.create("cardPayment", "containerCardPayment", {
        initialization: {
            amount: 100,
        },
        callbacks: {
            onSubmit: (formData, additionalData) => {
                return new Promise(() => {
                    console.log(formData, additionalData);
                });
            },
        },
    });
    controller.update({ amount: 100 });
})();

(async () => {
    const controller = await brickBuilder.create("payment", "containerPayment", {
        initialization: {
            amount: 100,
            items: {
                totalItemsAmount: 100,
                itemsList: [
                    {
                        units: 2,
                        value: 50,
                        name: "White t-shirt",
                    },
                ],
            },
            billing: {
                taxIdentificationNumber: "999",
                billingAddress: {
                    streetName: "street one",
                    streetNumber: "111",
                    zipCode: "1234567890",
                },
            },
            shipping: {
                shippingMode: "express",
                receiverAddress: {
                    streetName: "street one",
                    streetNumber: "111",
                    zipCode: "1234567890",
                    complement: "apartment 1",
                },
            },
            discounts: {
                totalDiscountsAmount: 10,
                discountsList: [
                    {
                        name: "WELCOME_10",
                        value: 10,
                    },
                ],
            },
            payer: {
                email: "test@test.com",
                address: {
                    streetName: "street one",
                    streetNumber: "111",
                    zipCode: "1234567890",
                    complement: "apartment 1",
                },
            },
        },
        customization: {
            paymentMethods: {
                atm: "all",
                bankTransfer: "all",
                creditCard: "all",
                debitCard: "all",
                ticket: "all",
                mercadoPago: "all",
            },
            enableReviewStep: true,
        },
        callbacks: {
            onSubmit(formData, additionalData) {
                return new Promise(() => {
                    console.log(formData);
                    if (additionalData && "cardholderName" in additionalData) {
                        console.log(additionalData.cardholderName);
                        console.log(additionalData.bin);
                        console.log(additionalData.lastFourDigits);
                    }
                });
            },
            onClickEditBillingData: () => {
                console.log("edit billing clicked");
            },
            onClickEditShippingData: () => {
                console.log("edit shipping clicked");
            },
            onRenderNextStep: (currentStep) => {
                console.log("next step rendered", currentStep);
            },
            onRenderPreviousStep: (currentStep) => {
                console.log("previous step rendered", currentStep);
            },
        },
    });
    controller.update({
        amount: 100,
        shipping: {
            shippingMode: "super express",
            receiverAddress: {
                streetName: "street two",
                streetNumber: "222",
                zipCode: "1122334455",
                complement: "apartment 3",
            },
        },
    });
})();

brickBuilder.create("statusScreen", "containerStatusScreen", {
    initialization: {
        paymentId: 123456789,
    },
    callbacks: {},
});

brickBuilder.create("wallet", "containerWallet", {
    initialization: {
        paymentId: 123456789,
    },
    customization: {
        texts: {
            action: "pay",
            valueProp: "smart_option",
        },
    },
    callbacks: {
        onSubmit: (formData: any, additionalData: any) => {
            return new Promise(() => {
                console.log(formData, additionalData);
            });
        },
    },
});

brickBuilder.create("brand", "containerBrand");

const fieldInstance = mpInstance.fields.create("cardNumber", {});
fieldInstance.mount("containerId");
fieldInstance.update({});
fieldInstance.on("validityChange", (args: any) => {});
mpInstance.fields.createCardToken({}, undefined);
fieldInstance.unmount();
