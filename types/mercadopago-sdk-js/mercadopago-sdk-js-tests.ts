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

const brickBuilder = mpInstance.bricks({});

brickBuilder.isInitialized();

brickBuilder.create('cardPayment', 'container', {
  initialization: {
    amount: 100
  },
  callbacks: {
    onSubmit: (formData, additionalData) => {
      return new Promise(() => {
        console.log(formData, additionalData);
      });
    }
  }
});

const fieldInstance = mpInstance.fields.create("cardNumber", {});
fieldInstance.mount("containerId");
fieldInstance.update({});
fieldInstance.on('validityChange', (args) => { });
mpInstance.fields.createCardToken({}, undefined);
fieldInstance.unmount();

export { mpInstance };
