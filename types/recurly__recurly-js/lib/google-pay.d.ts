import { Emitter } from './emitter';

/**
 * Options used to configure the Google Pay integration with Recurly.
 */
export type GooglePayOptions = {
  /**
   * Your ISO 3166 country code (ex: ‘US’). This is your country code as the merchant.
   */
  country: string;

  /**
   * ISO 4217 purchase currency (ex: ‘USD’).
   */
  currency: string;

  /**
   * Total cost to display in the Google Pay payment sheet.
   */
  total: string;

  /**
   * The Google merchant identifier issued after registration with the Google Pay and Wallet Console.
   */
  googleMerchantId: string;

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
   * Requires the user to accept providing the full billing address.
   */
  requireBillingAddress?: boolean;

  /**
   * Specify which Payment Gateway in Recurly must handle the payment.
   */
  gatewayCode?: string;
};

/**
 * Google Pay events.
 */
export type GooglePayEvent =
  | 'token'
  | 'error'
  | 'ready';

export type GooglePay = (options: GooglePayOptions) => Emitter<GooglePayEvent>;
