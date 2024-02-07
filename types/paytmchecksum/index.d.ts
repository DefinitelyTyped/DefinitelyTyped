export interface PaytmTxnAmmount {
    value: string;
    currency: string;
}

export interface PaytmUserInfo {
    custId: string;
    mobile?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}

export interface PaytmPaymentMode {
    mode?: string;
    channels?: string[];
}

export interface PaytmExtendInfo {
    [key: string]: string | undefined;
    mercUnqRef?: string;
    comments?: string;
}

export interface PaytmGoodsInfo {
    [key: string]: string | PaytmTxnAmmount | undefined | PaytmExtendInfo;
    price?: PaytmTxnAmmount;
    extendInfo: PaytmExtendInfo;

}

export interface PaytmShippingInfo {
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

export interface PaytmTransactionBody {
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

export interface PaytmStatusBody {
    mid: string;
    orderId: string;
    txnType?: string;
}

export type PaytmParamsBody = PaytmStatusBody | PaytmTransactionBody

export interface PaytmParamsHead {
    version?: string;
    channelId?: string;
    requestTimeStamp?: string;
    clientId?: string;
    signature: string;
}

export interface PaytmParams {
    body: PaytmParamsBody;
    head: PaytmParamsHead;
}

declare class PaytmChecksum {
    static iv: string;
    static encrypt(input: string, key: string): string;
    static decrypt(encrypted: string, key: string): string;
    static generateSignature(params: string | PaytmParamsBody, key: string): Promise<string>;
    static verifySignature(params: string | PaytmParamsBody, key: string, checksum: string): Promise<boolean> | boolean;
    static generateSignatureByString(params: string, key: string): Promise<string>;
    static verifySignatureByString(params: string, key: string, checksum: string): boolean;
    static generateRandomString(length: number): Promise<string>;
    static getStringByParams(params: PaytmParamsBody): string;
    static calculateHash(params: string, salt: string): string;
    static calculateChecksum(params: string, key: string, salt: string): string;
}
export default PaytmChecksum