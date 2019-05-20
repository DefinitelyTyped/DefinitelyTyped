/**
 * @global
 * @callback callback
 * @param {?BraintreeError} [err] `null` or `undefined` if there was no error.
 * @param {?any} [data] The successful result of the asynchronous function call (if data exists).
 * @description The Node.js-style callback pattern used throughout the SDK.
 * @returns {void}
 */
export type callback = (err?: BraintreeError, data?: any) => void;

export namespace BraintreeError {
  /**
   * Enum for {@link BraintreeError} types.
   * @name BraintreeError.types
   * @enum
   * @readonly
   * @memberof BraintreeError
   * @property {string} CUSTOMER An error caused by the customer.
   * @property {string} MERCHANT An error that is actionable by the merchant.
   * @property {string} NETWORK An error due to a network problem.
   * @property {string} INTERNAL An error caused by Braintree code.
   * @property {string} UNKNOWN An error where the origin is unknown.
   */
  export type Types = "CUSTOMER" | "MERCHANT" | "NETWORK" | "INTERNAL" | "UNKNOWN";
}

export interface BraintreeError {
  /**
   * @type {string}
   * @description A code that corresponds to specific errors.
   */
  code: string;

  /**
   * @type {string}
   * @description A short description of the error.
   */
  message: string;

  /**
   * @type {BraintreeError.types}
   * @description The type of error.
   */
  type: BraintreeError.Types;

  /**
   * @type {object=}
   * @description Additional information about the error, such as an underlying network error response.
   */
  details: any;
}
