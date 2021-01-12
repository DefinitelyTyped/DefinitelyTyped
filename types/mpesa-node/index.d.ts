// Type definitions for mpesa-node 0.1
// Project: https://github.com/safaricom/mpesa-node-library#readme
// Definitions by: Peter Munyao <https://github.com/petekmunz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AxiosPromise } from 'axios';

declare class Mpesa {
    constructor(config: ConfigOptions);

    accountBalance(shortCode: string, idType: string, queueUrl: string, resultUrl: string, remarks?: string, initiator?: string, commandId?: string): AxiosPromise;

    b2b(senderParty: string, receiverParty: string, amount: number, queueUrl: string, resultUrl: string, senderType?: number, receiverType?: number, initiator?: string,
        commandId?: string, accountRef?: string, remarks?: string): AxiosPromise;

    b2c(senderParty: string, receiverParty: string, amount: number, queueUrl: string, resultUrl: string, commandId?: string, initiatorName?: string,
        remarks?: string, occasion?: string): AxiosPromise;

    c2bRegister(confirmationUrl: string, validationUrl: string, shortCode?: string, responseType?: string): AxiosPromise;

    c2bSimulate(msisdn: string, amount: number, billRefNumber: string, commandId?: string, shortCode?: string): AxiosPromise;

    lipaNaMpesaOnline(senderMsisdn: string, amount: number, callbackUrl: string, accountRef: string, transactionDesc?: string,
        transactionType?: string, shortCode?: string, passKey?: string): AxiosPromise;

    lipaNaMpesaQuery(checkoutRequestId: string, shortCode?: string, passKey?: string): AxiosPromise;

    oAuth(consumerKey: string, consumerSecret: string, baseURL?: string): AxiosPromise;

    reversal(transactionId: string, amount: number, queueUrl: string, resultUrl: string,
        shortCode?: string, remarks?: string, occasion?: string, initiator?: string, receiverIdType?: string, commandId?: string): AxiosPromise;

    transactionStatus(transactionId: string, amount: number, queueUrl: string, resultUrl: string, shortCode?: string, remarks?: string,
        occasion?: string, initiator?: string, receiverIdType?: string, commandId?: string): AxiosPromise;
}

interface ConfigOptions {
    consumerKey: string;
    consumerSecret: string;
    enviroment?: string;
    shortCode?: string;
    initiatorName?: string;
    lipaNaMpesaShortCode?: string;
    lipaNaMpesaShortPass?: string;
    securityCredential?: string;
    certPath?: string;
}

export = Mpesa;
