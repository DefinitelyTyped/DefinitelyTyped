/**
 * @description The current version of the SDK, i.e. `3.0.2`.
 */
export const VERSION: string;

export type callback<T = any> = (err?: BraintreeError, data?: T) => void;

/**
 * Enum for {@link BraintreeError} types.
 */
export type BraintreeErrorTypes = 'CUSTOMER' | 'MERCHANT' | 'NETWORK' | 'INTERNAL' | 'UNKNOWN';

export interface BraintreeError {
    /**
     * @description A code that corresponds to specific errors.
     */
    code: string;

    /**
     * @description A short description of the error.
     */
    message: string;

    /**
     * @description The type of error.
     */
    type: BraintreeErrorTypes;

    /**
     * @description Additional information about the error, such as an underlying network error response.
     */
    details: any;
}
