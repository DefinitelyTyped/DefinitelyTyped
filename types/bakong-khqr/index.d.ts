// export type KHQRCurrency = Record<'usd' | 'khr', number>
export interface khqrData {
    currency: {
        usd: number;
        khr: number;
    };
}

export type merchantType = "merchant" | "individual";

export interface IndividualInfo {
    bakongAccountID: string;
    merchantName: string;
    merchantCity?: string;
    accountInformation?: string;
    acquiringBank: string;
    currency?: number;
    amount?: number;
    billNumber?: string;
    storeLabel?: string;
    terminalLabel?: string;
    mobileNumber?: string;
    purposeOfTransaction?: string;
    languagePreference?: string;
    merchantNameAlternateLanguage?: string;
    merchantCityAlternateLanguage?: string;
    upiMerchantAccount?: string;
}

export interface MerchantInfo extends IndividualInfo {
    merchantID: string;
}

export interface SourceInfo {
    appIconUrl: string;
    appName: string;
    appDeepLinkCallback: string;
}

export interface KHQRResponse {
    status: { code: number; errorCode: null | number; message: null | string };
    data: null | unknown;
}

export class BakongKHQR {
    generateIndividual(individualInfo: IndividualInfo): KHQRResponse;
    generateMerchant(merchantInfo: MerchantInfo): KHQRResponse;
    generateDeepLink(url: string, qr: string, sourceInfo?: SourceInfo): Promise<KHQRResponse>;
    static verify(qr: string): { isValid: boolean };
    static decode(qr: string): KHQRResponse;
    static checkBakongAccount(url: string, accountID: string): Promise<{ bakongAccountExisted: boolean }>;
}
