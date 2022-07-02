import * as ymsdk from 'yandex-money-sdk';

let wallet: ymsdk.Wallet;
let externalPayment: ymsdk.ExternalPayment;

{
    let clientId: string;
    let redirectURI: string;
    let scope: string[];
    let result: string;

    result = ymsdk.Wallet.buildObtainTokenUrl(clientId, redirectURI, scope);
}

{
    let clientId: string;
    let code: string;
    let redirectURI: string;
    let clientSecret: string;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.GetAccessTokenResult>;

    ymsdk.Wallet.getAccessToken(clientId, code, redirectURI, clientSecret, callback);
}

{
    let token: string;
    let revoke_all: any;
    let callback: ymsdk.ResponseCallback<any>;

    ymsdk.Wallet.revokeToken(token, revoke_all, callback);
}

{
    let accessToken: string;
    let result: ymsdk.Wallet;

    result = new ymsdk.Wallet(accessToken);
}

{
    let params: YandexMoneySDK.Wallet.SendAuthenticatedRequestParams;
    let callback: ymsdk.ResponseCallback<any>;

    wallet.sendAuthenticatedRequest(params, callback)
}

{
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.AccountInfoResult>;

    wallet.accountInfo(callback);
}

{
    let options: YandexMoneySDK.Wallet.OperationHistoryOptions;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.OperationHistoryResult>;

    wallet.operationHistory(options, callback);
}

{
    let operation_id: string;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.OperationDetailsResult>;

    wallet.operationDetails(operation_id, callback);
}

{
    let options: YandexMoneySDK.Wallet.RequestPaymentOptions;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.RequestPaymentResult>;

    wallet.requestPayment(options, callback);
}

{
    let options: YandexMoneySDK.Wallet.ProcessPaymentOptions;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.ProcessPaymentResult>;

    wallet.processPayment(options, callback);
}

{
    let operation_id: string;
    let protectionCode: string;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferAcceptResult>;

    wallet.incomingTransferAccept(operation_id, protectionCode, callback);
}

{
    let operation_id: string;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferRejectResult>;

    wallet.incomingTransferReject(operation_id, callback);
}

{
    let clientId: string;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.ExternalPayment.GetInstanceIdResult>;

    ymsdk.ExternalPayment.getInstanceId(clientId, callback);
}

{
    let instanceId: string;
    let result: ymsdk.ExternalPayment;

    result = new ymsdk.ExternalPayment(instanceId);
}

{
    let options: YandexMoneySDK.ExternalPayment.RequestOptions;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.ExternalPayment.RequestResult>;

    externalPayment.request(options, callback);
}

{
    let options: YandexMoneySDK.ExternalPayment.ProcessOptions;
    let callback: ymsdk.ResponseCallback<YandexMoneySDK.ExternalPayment.ProcessResult>;

    externalPayment.process(options, callback);
}
