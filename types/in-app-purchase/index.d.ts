// Type definitions for in-app-purchase 1.10
// Project: https://github.com/voltrue2/in-app-purchase#readme
// Definitions by: Jonas Lochmann <https://github.com/l-jonas>, Dennis Kugelmann <https://github.com/IchordeDionysos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export const UNITY = 'unity';
export const APPLE = 'apple';
export const GOOGLE = 'google';
export const WINDOWS = 'windows';
export const AMAZON = 'amazon';
export const ROKU = 'roku';

export function config(params: Config): void;
export function setup(): Promise<void>;
export function setup(callback: (err: any) => void): void;
export function getService(receipt: Receipt): Service;

export function validate(receipt: Receipt): Promise<ValidationResponse>;
export function validate(receipt: Receipt, callback: (err: any, res: ValidationResponse) => void): void;
export function validate(service: Service, receipt: Receipt, callback: (err: any, res: ValidationResponse) => void): void;

export function validateOnce(receipt: Receipt, secretOrPubKey: any): Promise<ValidationResponse>;
export function validateOnce(receipt: Receipt, secretOrPubKey: any, callback: (err: any, res: ValidationResponse) => void): void;
export function validateOnce(service: Service, secretOrPubKey: any, receipt: Receipt, callback: (err: any, res: ValidationResponse) => void): void;

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
  amazonAPIVersion?: number;
  secret?: string;

  /* Configurations for Apple */

  // this comes from iTunes Connect (You need this to valiate subscriptions)
  applePassword?: string;

  /* Configurations for Google Play */
  // this is the path to the directory containing iap-sanbox/iap-live files
  googlePublicKeyPath?: string;
  // optional, for Google Play subscriptions
  googleAccToken?: string;
  // optional, for Google Play subscritions
  googleRefToken?: string;
  // optional, for Google Play subscriptions
  clientId?: string;
  // optional, for Google Play subscriptions
  clientSecret?: string;
  // optional, for Google Play subscriptions
  refreshToken?: string;

  /* Configurations for Roku */
  // this comes from Roku Developer Dashboard
  rokuApiKey?: string;

  /* Configurations all platforms */
  // For Apple and Googl Play to force Sandbox validation only
  test?: boolean;
  // Output debug logs to stdout stream
  verbose?: boolean;
}

export type Service = typeof UNITY | typeof APPLE | typeof GOOGLE | typeof WINDOWS | typeof AMAZON | typeof ROKU;

export type UnityReceipt = object | string;
export type AppleReceipt = string;
export type GoogleReceipt = {
  date: string;
  signature: string;
} | string;
export type WindowsReceipt = string;
export type AmazonReceipt = object | string;
export type RokuReceipt = string;

export type Receipt = UnityReceipt | AppleReceipt | GoogleReceipt | WindowsReceipt | AmazonReceipt | RokuReceipt;

export interface ValidationResponse {
  service: Service;
  status: number;
  // there are more fields depending on the used service
}

export interface PurchasedItem {
  bundleId?: string;  // only Apple
  appItemId?: string;
  orderId?: string; // only Google
  originalTransactionId?: string; // only Apple
  transactionId: string;
  productId: string;
  originalPurchaseDate?: string; // only Apple
  purchaseDate: number | string;
  isTrial?: boolean; // only Apple
  cancellationDate?: number; // only Apple/Google
  // iTunes, windows and amazon subscription only
  // Google subscriptions only with google play store api info
  expirationDate?: number;
  quantity: number;
  // this was created based on the source code of in-app-purchase
  // eventually there are more fields
}
