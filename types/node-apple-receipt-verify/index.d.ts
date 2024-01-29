export enum ERROR_CODES {
    /** The receipt validated successfully. */
    SUCCESS = 0,

    /** The receipt is valid, but purchased nothing. */
    VALID_BUT_EMPTY = 2,

    /** The App Store could not read the JSON object you provided. */
    INVALID_JSON = 21000,

    /** The data in the receipt-data property was malformed or missing. */
    INVALID_RECEIPT_DATA = 21002,

    /** The receipt could not be authenticated. */
    COULD_NOT_AUTHENTICATE = 21003,

    /** The shared secret you provided does not match the shared secret on file for your account. */
    INVALID_SECRET = 21004,

    /** The receipt server is not currently available. */
    UNAVAILABLE = 21005,

    /**
     * This receipt is valid but the subscription has expired. When this status code is returned to your server, the receipt data is also decoded and returned as part of the response.
     * Only returned for iOS 6 style transaction receipts for auto-renewable subscriptions.
     */
    EXPIRED_SUBSCRIPTION = 21006,

    /** This receipt is from the test environment, but it was sent to the production environment for verification. Send it to the test environment instead. */
    TEST_RECEIPT = 21007,

    /** This receipt is from the production environment, but it was sent to the test environment for verification. Send it to the production environment instead. */
    PROD_RECEIPT = 21008,

    /** This receipt could not be authorized. Treat this the same as if a purchase was never made. */
    COULD_NOT_AUTHORIZE = 21010,
}

export interface ConfigOptions {
    secret: string;
    verbose?: boolean | undefined;
    environment?: string[] | undefined;
    ignoreExpiredError?: boolean | undefined;
    ignoreExpired?: boolean | undefined;
    extended?: boolean | undefined;
    excludeOldTransactions?: boolean | undefined;
}

export function config(options: ConfigOptions): ConfigOptions;

export interface ValidateOptions {
    receipt: string;
    device?: string | undefined;
}

export interface PurchasedProducts {
    bundleId: string;
    transactionId: string;
    productId: string;
    purchaseDate: number;
    quantity: number;
    expirationDate?: number | undefined;
    isTrialPeriod?: boolean | undefined; // only for subscriptions and if extended = true
    isInIntroOfferPeriod?: boolean | undefined; // only for subscriptions and if extended = true; since v1.5.1
    environment?: string | undefined; // only if extended = true
    originalPurchaseDate?: number | undefined; // only if extended = true
    applicationVersion?: string | undefined; // only if extended = true
    originalApplicationVersion?: string | undefined; // only if extended = true
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

export function resetConfig(): void;

export function extract(options: {}): Promise<Array<{}>>;
