// Type definitions for node-apple-receipt-verify 1.7
// Project: https://github.com/ladeiko/node-apple-receipt-verify
// Definitions by: serinuntius <https://github.com/serinuntius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ConfigOptions {
    secret: string;
    verbose?: boolean;
    environment?: string[];
    ignoreExpiredError?: boolean;
    ignoreExpired?: boolean;
    extended?: boolean;
    excludeOldTransactions?: boolean;
}

export function config(options: ConfigOptions): ConfigOptions;

export interface ValidateOptions {
    receipt: string;
    device?: string;
}

export interface PurchasedProducts {
    bundleId: string;
    transactionId: string;
    productId: string;
    purchaseDate: number;
    quantity: number;
    expirationDate?: number;
    isTrialPeriod?: boolean; // only for subscriptions and if extended = true
    isInIntroOfferPeriod?: boolean; // only for subscriptions and if extended = true; since v1.5.1
    environment?: string; // only if extended = true
    originalPurchaseDate?: number; // only if extended = true
    applicationVersion?: string; // only if extended = true
    originalApplicationVersion?: string; // only if extended = true
}

export interface ValidationError extends Error {
    isRetryable: boolean;
    appleStatus: number;
}

export function EmptyError(): void;

export function ServiceUnavailableError(): void;

export function validate(
    options: ValidateOptions,
    callback: (error: ValidationError, purchasedProducts: PurchasedProducts[]) => void,
): void;
export function validate(options: ValidateOptions): Promise<PurchasedProducts[]>;
