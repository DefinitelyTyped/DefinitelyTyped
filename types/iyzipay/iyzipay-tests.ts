import Iyzipay = require("iyzipay");

const iyzipay = new Iyzipay({
    secretKey: "secretKey",
    apiKey: "apiKey",
    uri: "https://sandbox-api.iyzipay.com",
});

iyzipay.apiTest.retrieve({}, (err, result) => { });
Iyzipay.LOCALE.TR;
Iyzipay.PAYMENT_GROUP.PRODUCT;