// Type definitions for mpesa-node 0.1
// Project: https://github.com/safaricom/mpesa-node-library
// Definitions by: Peter Munyao <https://github.com/petekmunz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Mpesa {
    constructor(config: ConfigOptions);

    accountBalance(shortCode: string, idType: string, queueUrl: string, resultUrl: string, remarks?: string, initiator?: string, commandId?: string): Promise<void>;

    b2b(senderParty: string, receiverParty: string, amount: number, queueUrl: string, resultUrl: string, senderType?: number, receiverType?: number, initiator?: string,
        commandId?: string, accountRef?: string, remarks?: string): Promise<void>;

    b2c(senderParty: string, receiverParty: string, amount: number, queueUrl: string, resultUrl: string, commandId?: string, initiatorName?: string,
        remarks?: string, occasion?: string): Promise<void>;

    c2bRegister(confirmationUrl: string, validationUrl: string, shortCode?: string, responseType?: string): Promise<void>;

    c2bSimulate(msisdn: string, amount: number, billRefNumber: string, commandId?: string, shortCode?: string): Promise<void>;

    lipaNaMpesaOnline(senderMsisdn: string, amount: number, callbackUrl: string, accountRef: string, transactionDesc?: string,
        transactionType?: string, shortCode?: string, passKey?: string): Promise<void>;

    lipaNaMpesaQuery(checkoutRequestId: string, shortCode?: string, passKey?: string): Promise<void>;

    oAuth(consumerKey: string, consumerSecret: string, baseURL?: string): Promise<void>;

    reversal(transactionId: string, amount: number, queueUrl: string, resultUrl: string,
        shortCode?: string, remarks?: string, occasion?: string, initiator?: string, receiverIdType?: string, commandId?: string): Promise<void>;

    transactionStatus(transactionId: string, amount: number, queueUrl: string, resultUrl: string, shortCode?: string, remarks?: string,
        occasion?: string, initiator?: string, receiverIdType?: string, commandId?: string): Promise<void>;
}

export interface ConfigOptions {
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
