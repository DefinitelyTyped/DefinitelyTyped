export const UNITY = "unity";
export const APPLE = "apple";
export const GOOGLE = "google";
export const WINDOWS = "windows";
export const AMAZON = "amazon";
export const FACEBOOK = "facebook";
export const ROKU = "roku";

export function config(params: Config): void;
export function setup(): Promise<void>;
export function setup(callback: (err: any) => void): void;
export function getService(receipt: Receipt): Service;

export function validate(receipt: Receipt): Promise<ValidationResponse>;
export function validate(receipt: Receipt, callback: (err: any, res: ValidationResponse) => void): void;
export function validate(
    service: Service,
    receipt: Receipt,
    callback: (err: any, res: ValidationResponse) => void,
): void;

export function validateOnce(receipt: Receipt, secretOrPubKey: any): Promise<ValidationResponse>;
export function validateOnce(
    receipt: Receipt,
    secretOrPubKey: any,
    callback: (err: any, res: ValidationResponse) => void,
): void;
export function validateOnce(
    service: Service,
    secretOrPubKey: any,
    receipt: Receipt,
    callback: (err: any, res: ValidationResponse) => void,
): void;

export function isValidated(response: ValidationResponse): boolean;
export function isExpired(item: PurchasedItem): boolean;
export function isCanceled(item: PurchasedItem): boolean;
export function getPurchaseData(purchaseData?: ValidationResponse, options?: {
    ignoreCanceled: boolean;
    ignoreExpired: boolean;
}): PurchasedItem[] | null;

export function refreshGoogleToken(): Promise<void>;
export function refreshGoogleToken(callback: (err: any) => void): void;

// for test use only, resets the google setup
export function reset(): void;

export interface Config {
    /* Configurations for Amazon Store */
    amazonAPIVersion?: number | undefined;
    secret?: string | undefined;

    /* Configurations for Apple */

    // if you want to exclude old transaction, set this to true. Default is false
    appleExcludeOldTransactions?: boolean | undefined;
    // this comes from iTunes Connect (You need this to valiate subscriptions)
    applePassword?: string | undefined;

    // Configurations for Google Service Account validation: You can validate with just packageName, productId, and purchaseToken
    googleServiceAccount?: {
        // client email from Google API service account JSON key file
        clientEmail: string;
        // private key string from Google API service account JSON key file
        privateKey: string;
    } | undefined;

    /* Configurations for Google Play */
    // this is the path to the directory containing iap-sanbox/iap-live files
    googlePublicKeyPath?: string | undefined;
    // this is the google iap-sandbox public key string
    googlePublicKeyStrSandBox?: string | undefined;
    // this is the google iap-live public key string
    googlePublicKeyStrLive?: string | undefined;
    // optional, for Google Play subscriptions
    googleAccToken?: string | undefined;
    // optional, for Google Play subscritions
    googleRefToken?: string | undefined;
    // optional, for Google Play subscriptions
    googleClientID?: string | undefined;
    // optional, for Google Play subscriptions
    googleClientSecret?: string | undefined;
    // optional, for Google Play subscriptions
    googleRefreshToken?: string | undefined;

    /* Configurations for Roku */
    // this comes from Roku Developer Dashboard
    rokuApiKey?: string | undefined;

    /* Configurations for Facebook (Payments Lite) */
    facebookAppId?: string | undefined;
    facebookAppSecret?: string | undefined;

    /* Configurations all platforms */
    // For Apple and Googl Play to force Sandbox validation only
    test?: boolean | undefined;
    // Output debug logs to stdout stream
    verbose?: boolean | undefined;
}

export type Service =
    | typeof UNITY
    | typeof APPLE
    | typeof GOOGLE
    | typeof WINDOWS
    | typeof AMAZON
    | typeof FACEBOOK
    | typeof ROKU;

export type UnityReceipt = object | string;
export type AppleReceipt = string;
export type GoogleReceipt = {
    data: string;
    signature: string;
} | string;
export type WindowsReceipt = string;
export type AmazonReceipt = object | string;
export type RokuReceipt = string;
export type FacebookReceipt = string;

export type Receipt =
    | UnityReceipt
    | AppleReceipt
    | GoogleReceipt
    | WindowsReceipt
    | AmazonReceipt
    | FacebookReceipt
    | RokuReceipt;

export interface ValidationResponse {
    service: Service;
    status: number;
    // there are more fields depending on the used service
}

export interface PurchasedItem {
    bundleId?: string | undefined; // only Apple
    appItemId?: string | undefined;
    orderId?: string | undefined; // only Google
    originalTransactionId?: string | undefined; // only Apple
    transactionId: string;
    productId: string;
    originalPurchaseDate?: string | undefined; // only Apple
    purchaseDate: number | string;
    isTrial?: boolean | undefined; // only Apple
    cancellationDate?: number | undefined; // only Apple/Google
    // iTunes, windows and amazon subscription only
    // Google subscriptions only with google play store api info
    expirationDate?: number | string | undefined;
    quantity: number;
    // this was created based on the source code of in-app-purchase
    // eventually there are more fields
}
