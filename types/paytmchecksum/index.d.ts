/// <reference types="node" />
declare namespace PaytmChecksum{
    interface PaytmTxnAmmount {
    value: string;
    currency: string;
}

interface PaytmUserInfo {
    custId: string;
    mobile?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}

interface PaytmPaymentMode {
    mode?: string;
    channels?: string[];
}

interface PaytmExtendInfo {
    [key: string]: string | undefined;
    mercUnqRef?: string;
    comments?: string;
}

interface PaytmGoodsInfo {
    [key: string]: string | PaytmTxnAmmount | undefined | PaytmExtendInfo;
    price?: PaytmTxnAmmount;
    extendInfo: PaytmExtendInfo;

}

interface PaytmShippingInfo {
    merchantShippingId: string;
    trackingNo: string;
    carrier: string;
    chargeAmount: PaytmTxnAmmount;
    countryName: string;
    stateName: string;
    address1: string;
    address2: string;
    firstName: string;
    lastName: string;
    mobileNo: string;
    zipCode: string;
    email: string;
}

interface PaytmTransactionBody {
    requestType: string;
    mid: string;
    orderId: string;
    websiteName: string;
    txnAmount: PaytmTxnAmmount;
    userInfo: PaytmUserInfo;
    paytmSsoToken?: string;
    enablePaymentMode?: PaytmPaymentMode[];
    disablePaymentMode?: PaytmPaymentMode[];
    promocode?: string;
    callbackUrl?: string;
    goods?: PaytmGoodsInfo[];
    shippingInfo?: Array<Partial<PaytmShippingInfo>>;
    extendInfo?: PaytmExtendInfo;
    paymentOffersApplied?: any;
    simplifiedPaymentOffers?: any;
    emiSubventionToken?: string;
    paybleAmount?: PaytmTxnAmmount;
}

interface PaytmStatusBody {
    mid: string;
    orderId: string;
    txnType?: string;
}

type PaytmParamsBody = PaytmStatusBody | PaytmTransactionBody

interface PaytmParamsHead {
    version?: string;
    channelId?: string;
    requestTimeStamp?: string;
    clientId?: string;
    signature: string;
}

interface PaytmParams {
    body: PaytmParamsBody;
    head: PaytmParamsHead;
}}

declare class PaytmChecksum {
    static iv: string;
    static encrypt(input: string, key: string): string;
    static decrypt(encrypted: string, key: string): string;
    static generateSignature(params: string | PaytmChecksum.PaytmParamsBody, key: string): Promise<string>;
    static verifySignature(params: string | PaytmChecksum.PaytmParamsBody, key: string, checksum: string): Promise<boolean> | boolean;
    static generateSignatureByString(params: string, key: string): Promise<string>;
    static verifySignatureByString(params: string, key: string, checksum: string): boolean;
    static generateRandomString(length: number): Promise<string>;
    static getStringByParams(params: PaytmChecksum.PaytmParamsBody): string;
    static calculateHash(params: string, salt: string): string;
    static calculateChecksum(params: string, key: string, salt: string): string;
}
export default PaytmChecksum