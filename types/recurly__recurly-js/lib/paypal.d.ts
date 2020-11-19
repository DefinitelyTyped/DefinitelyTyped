import { Emitter } from './emitter';

export type BraintreeConfig = {
  braintree: {
    clientAuthorization: string;
  };
};

export type DirectConfig = {
  display?: {
    displayName?: string;
  };
};

export type PayPalConfig = BraintreeConfig | DirectConfig;

export type PayPalEvent = 'error' | 'token' | 'cancel' | 'ready';

export type PayPalStartOptions = {
  options: {
    description: string;
  }
};

export interface PayPalInstance extends Emitter<PayPalEvent> {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-paypalstart|PayPal.start}
   */
  start: (payPalStartOptions?: PayPalStartOptions) => void;

  destroy: VoidFunction;
}

export type PayPal = (config?: PayPalConfig) => PayPalInstance;
