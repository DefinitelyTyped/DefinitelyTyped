import Iyzipay = require("iyzipay");

const iyzipay = new Iyzipay({
    secretKey: "secretKey",
    apiKey: "apiKey",
    uri: "https://sandbox-api.iyzipay.com",
});

iyzipay.apiTest.retrieve({}, (err, result) => {});
Iyzipay.LOCALE.TR;
Iyzipay.PAYMENT_GROUP.PRODUCT;
Iyzipay.PAYMENT_GROUP.LISTING;
iyzipay.cardList.retrieve({
    locale: Iyzipay.LOCALE.TR,
    conversationId: "123456789",
    cardUserKey: "cardUserKey",
}, (err, result) => {});
