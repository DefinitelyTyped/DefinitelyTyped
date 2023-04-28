import * as mp from "./index";

//initiate MP library
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

export { mpInstance };