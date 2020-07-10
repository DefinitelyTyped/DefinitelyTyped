import { Mpesa } from 'mpesa-node';

const mpesaClient = new Mpesa({ consumerKey: 'test', consumerSecret: 'test' });

mpesaClient.accountBalance('600111', '4', 'someurl/queue', 'someurl/result'); // Returns value should match type of promise

mpesaClient.b2b('600100', '600000', 500, 'someurl/queue', 'someurl/result'); // Return value should match type of Promise

mpesaClient.b2c('600100', '254722123456', 56, 'someurl/queue', 'someurl/result'); // Return value should match type of Promise

mpesaClient.c2bRegister('someurl/confirmation', 'someurl/validation'); // Return value should match type of Promise

mpesaClient.c2bSimulate('254722123456', 98, '123456'); // Return value should match type of Promise

mpesaClient.lipaNaMpesaOnline('254722123456', 45, 'someurl/callback', 'accountref'); // Return value should match type of Promise

mpesaClient.lipaNaMpesaQuery('wsyhjk6455opp'); // Return value should match type of Promise

mpesaClient.oAuth('consumerkey', 'consumersecret'); // Return value should match type of Promise

mpesaClient.reversal('WSDFR578', 456, 'someurl/queue', 'someurl/result'); // Return value should match type of Promise

mpesaClient.transactionStatus('WSDFR578', 578, 'someurl/queue', 'someurl/result'); // Return value should match type of Promise
