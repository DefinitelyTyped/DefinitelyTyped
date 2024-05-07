import { Emitter } from '../emitter';
import {
  GooglePayPaymentDataRequest,
  GooglePayIntermediatePaymentData,
  GooglePayPaymentDataRequestUpdate,
  GooglePayPaymentDataError,
  GooglePayPaymentData,
} from './native';

export * from './native';

export type GooglePayPaymentAuthorizationResult = {
  /**
   * The error to be rendered in the payment sheet for the user when it's necessary to retry the payment.
   */
  error: GooglePayPaymentDataError;
};

/**
 * Options used to configure the Google Pay integration with Recurly.
 */
export type GooglePayOptions = {
  /**
   * Your ISO 3166 country code (ex: ‘US’). This is your country code as the merchant.
   * Required unless paymentData.transactionInfo.countryCode is used.
   */
  country?: string;

  /**
   * ISO 4217 purchase currency (ex: ‘USD’).
   * Required unless paymentData.transactionInfo.currencyCode is used.
   */
  currency?: string;

  /**
   * Total cost to display in the Google Pay payment sheet.
   * Required unless paymentData.transactionInfo.totalPrice is used.
   */
  total?: string;

  /**
   * The Google merchant identifier issued after registration with the Google Pay and Wallet Console.
   * Required unless paymentData.merchantInfo.merchantId is used.
   */
  googleMerchantId?: string;

  /**
   * The Google merchant business name registered with the Google Pay and Wallet Console.
   */
  googleBusinessName?: string;

  /**
   * The object to configure the Google Pay payment button.
   * See https://developers.google.com/pay/api/web/reference/request-objects#ButtonOptions for options supported.
   *
   */
  buttonOptions?: {
    [key: string]: any
  };

  /**
   * If set to true, then the Google Pay button will not be rendered and an error will be emitted if the user
   * is not eligible to pay with Google Pay.
   * See https://developers.google.com/pay/api/web/reference/request-objects#IsReadyToPayRequest for more information.
   */
  existingPaymentMethodRequired?: boolean;

  /**
   * Requires the user to accept providing the full billing address.
   * @deprecated use billingAddressRequired
   */
  requireBillingAddress?: boolean;

  /**
   * Requires the user to accept providing the full billing address.
   */
  billingAddressRequired?: boolean;

  /**
   * Specify which Payment Gateway in Recurly must handle the payment.
   */
  gatewayCode?: string;

  /**
   * Specify configuration for Google Pay API.
   */
  paymentDataRequest?: GooglePayPaymentDataRequest;

  /**
   * Callbacks for the events emitted by the payment session when dynamic price updates are requested.
   */
  callbacks?: {
    onPaymentDataChanged?: (intermediatePaymentData: GooglePayIntermediatePaymentData) => Promise<GooglePayPaymentDataRequestUpdate>;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onPaymentAuthorized?: (paymentData: GooglePayPaymentData) => Promise<GooglePayPaymentAuthorizationResult> | void;
  },
};

/**
 * Google Pay events.
 */
export type GooglePayEvent =
  | 'token'
  | 'error'
  | 'ready'
  | 'paymentAuthorized';

export type GooglePay = (options: GooglePayOptions) => Emitter<GooglePayEvent>;
