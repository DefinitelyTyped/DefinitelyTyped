import { Address } from './address';
import { Emitter } from './emitter';

export type AlternativePaymentMethodEvents = 'token' | 'error' | 'valid';

export type AlternativePaymentMethodType = 'boleto' | 'ideal' | 'sofort' | 'paypal' | 'cashapp' | 'bacs';

export type ChannelType = 'iOS' | 'Android' | 'Web';

export type AdyenEnvironmentType = 'test' | 'live' | 'live-au' | 'live-us' | 'live-apse';

export type AdyenAlternativePaymentMethodOptions = {
  /**
   * A public key linked to your API credential, used for client-side authentication.
   */
  publicKey: string,

  /**
   * Indicate a test or a live environment. Defaults to `"test"`.
   */
  env?: AdyenEnvironmentType,

  /**
   * Show or hides a Pay Button for each payment method. Defaults to `false`.
   * When the button is disable you need to call the submit() function when the payment form is valid.
   */
  showPayButton?: boolean,

  /**
   * Additional Adyen Configuration.
   */
  componentConfig?: { [key: string]: any }
};

export type CustomerOptions = {
  /**
   * The customer's billing address.
   */
  billingAddress?: Address;
};

export type AlternativePaymentMethodStartOptions = {
  /**
   * List of payment methods to be presented to the customer.
   */
  allowedPaymentMethods: AlternativePaymentMethodType[];

  /**
   * List of payment methods to be hidden from the customer.
   */
  blockedPaymentMethods?: AlternativePaymentMethodType[];

  /**
   * Css selector of the DOM Element where you want the payment method form to be rendered.
   */
  containerSelector: string;

  /**
   * The amount of the payment.
   */
  amount: number;

  /**
   * The currency of the payment.
   */
  currency: string;

  /**
   * The customer's country code.
   */
  countryCode: string;

  /**
   * The customer's locale. This is used to set the language rendered in the UI. Defaults to `"en-US"`.
   */
  locale?: string;

  /**
   * The platform where a payment transaction takes place.
   * This field can be used for filtering out payment methods that are only available on specific platforms.
   * Defaults to `"Web"`.
   */
  channel?: ChannelType,

  /**
   * Adyen options.
   */
  adyen?: AdyenAlternativePaymentMethodOptions,

  /**
   * Sets additional customer fields on the generated token.
   */
  customer?: CustomerOptions,

  /**
   * The URL to return to after the shopper completes the payment.
   */
  returnURL?: string
};

export type AlternativePaymentMethodSubmitOptions = {
  /**
   * Sets the customer billing address on the generated token.
   */
  billingAddress?: Address;
};

export interface AlternativePaymentMethodsInstance extends Emitter<AlternativePaymentMethodEvents> {
  /**
   * Start the PaymentMethods and render the components.
   */
  start: () => Promise<void>;

  /**
   * Submit the customer payment information and produce a token.
   * Call this function only when the payment information provided by the customer is valid, by listening the 'valid' event.
   * The token can be retrieved through the 'token' event.
   */
  submit: (args: AlternativePaymentMethodSubmitOptions) => Promise<void>;

  /**
   * Some payment methods require additional action from the shopper such as: to scan a QR code,
   * to authenticate a payment with 3D Secure, or to log in to their bank's website to complete the payment.
   * Use this method handle these additional front-end actions.
   * The paymentResponse parameter can be obtained from the response of any API result which includes the transaction.actionResult.
   */
  handleAction: (paymentResponse: any) => Promise<void>;
}

export type AlternativePaymentMethods = (config: AlternativePaymentMethodStartOptions) => AlternativePaymentMethodsInstance;
