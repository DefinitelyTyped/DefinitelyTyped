/**
 * Options for loading Hyper SDK
 */
export interface LoadOptions {
    env?: 'PROD' | 'SANDBOX' | string;
    [key: string]: any;
}

/**
 * Parameters for creating a payment
 */
export interface PaymentParams {
    amount: number;
    currency: string;
    [key: string]: any;
}

/**
 * Response from creating a payment
 */
export interface PaymentResponse {
    success: boolean;
    paymentId?: string;
    error?: string;
}

/**
 * Parameters for creating a payment method
 */
export interface PaymentMethodParams {
    type: string;
    details: object;
    [key: string]: any;
}

/**
 * Response from creating a payment method
 */
export interface PaymentMethodResponse {
    success: boolean;
    methodId?: string;
    error?: string;
}

/**
 * Event handler type
 */
export type EventHandler = (...args: any[]) => void;

/**
 * Hyper SDK interface
 */
export interface HyperSDK {
    initialize(): Promise<void>;
    createPayment(params: PaymentParams): Promise<PaymentResponse>;
    on(event: string, handler: EventHandler): void;
    version: string;
    isInitialized: boolean;
}

/**
 * Stripe SDK interface
 */
export interface StripeSDK {
    initialize(): Promise<void>;
    createPaymentMethod(params: PaymentMethodParams): Promise<PaymentMethodResponse>;
    on(event: string, handler: EventHandler): void;
    version: string;
    isInitialized: boolean;
}

/**
 * Loads the Hyper JavaScript SDK
 * @param apiKey The public API key
 * @param options Additional options for the SDK
 * @returns A promise that resolves with the Hyper SDK
 */
declare function loadHyper(apiKey: string, options?: LoadOptions): Promise<HyperSDK>;

/**
 * Loads the Stripe JavaScript SDK (Deprecated)
 * @param apiKey The public API key
 * @param options Additional options for the SDK
 * @returns A promise that resolves with the Stripe SDK
 * @deprecated Please use loadHyper instead
 */
declare function loadStripe(apiKey: string, options?: LoadOptions): Promise<StripeSDK>;

export {
    loadHyper,
    loadStripe
}
