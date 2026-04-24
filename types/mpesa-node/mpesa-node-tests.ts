import Mpesa = require("mpesa-node");

const mpesaClient = new Mpesa({ consumerKey: "test", consumerSecret: "test" });

mpesaClient.accountBalance("600111", "4", "someurl/queue", "someurl/result"); // $ExpectType AxiosPromise

mpesaClient.b2b("600100", "600000", 500, "someurl/queue", "someurl/result"); // $ExpectType AxiosPromise

mpesaClient.b2c("600100", "254722123456", 56, "someurl/queue", "someurl/result"); // $ExpectType AxiosPromise

mpesaClient.c2bRegister("someurl/confirmation", "someurl/validation"); // $ExpectType AxiosPromise

mpesaClient.c2bSimulate("254722123456", 98, "123456"); // $ExpectType AxiosPromise

mpesaClient.lipaNaMpesaOnline("254722123456", 45, "someurl/callback", "accountref"); // $ExpectType AxiosPromise

mpesaClient.lipaNaMpesaQuery("wsyhjk6455opp"); // $ExpectType AxiosPromise

mpesaClient.oAuth("consumerkey", "consumersecret"); // $ExpectType AxiosPromise

mpesaClient.reversal("WSDFR578", 456, "someurl/queue", "someurl/result"); // $ExpectType AxiosPromise

mpesaClient.transactionStatus("WSDFR578", 578, "someurl/queue", "someurl/result"); // $ExpectType AxiosPromise
